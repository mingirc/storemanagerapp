import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addCategory } from '../../../../actions';
import CategoryDelete from '../categoryDelete/CategoryDelete';
import { Grid } from '@mui/material'
import CircularBlock from '../../../../components/CircularBlock';
import ListHeaderBase from '../../../../components/renderProps/ListHeaderBase';
import CategoryEdit from '../categoryEdit/CategoryEdit';
import CategoryAdd from '../categoryAdd/CategoryAdd';
import AddAddNewButton from '../../../../components/renderProps/AddAddNewButton';

const CategoryList = props => {

    const { categories } = props;

    const [ term, setTerm ] = useState('');
    const [ categoryList, setCategoryList ] = useState(categories)

    // Search category by input term.
    useEffect(() => {

        let tempList = categories;

        // search with this properties.
        if(term){
            let regexp = new RegExp(term, 'gi')
            tempList = tempList.filter(({ name }) => name.match(regexp))
        }

        // wait for typing end.
        const categoryTimeout = setTimeout(() => {
            setCategoryList(tempList)
        }, 300)

        return () => clearTimeout(categoryTimeout)

    }, [ term, categories ])

    let navigate = useNavigate();
    let params = useParams();

    // on search input change
    const onInputChange = e => {
        setTerm(e.target.value)
    }

    
    const editClickHandler = editCategoryId => {
        navigate(`/inventorymanagement/categorymanagement/edit/${editCategoryId}`)
    }

    const deleteClickHandler = deleteCategoryId => {
        navigate(`/inventorymanagement/categorymanagement/delete/${deleteCategoryId}`)
    }

    const renderCategoryList = () => {
        if(categoryList.length > 0){
            return categoryList.map(({ id, name, imageUrl }) => {
                return (
                    <Grid item xl={3} lg={3} md={4} sm={6} xs={12} key={id}>
                        <CircularBlock 
                        id={id} 
                        name={name} 
                        imageUrl={imageUrl} 
                        deleteClickHandler={deleteClickHandler} 
                        editClickHandler={editClickHandler} 
                        />
                    </Grid>
                )
            })
        }
        else{
            return null
        }
    }

    return(
        <ListHeaderBase
            isReqInput
            onInputChange={onInputChange}
            inputValue={term}
            isReqSelect={false}
            renderList={
            <AddAddNewButton>{() => renderCategoryList()}</AddAddNewButton>
            }
            addComponent={params.action === 'addnew' && <CategoryAdd />}
            editComponent={
                params.editCategoryId && 
                <CategoryEdit id={params.editCategoryId} />
            }
            deleteComponent={
                params.deleteCategoryId && 
                <CategoryDelete id={params.deleteCategoryId} />
            }
        />
    )

}

const mapStateToProps = state => {
    return { categories: state.categories }
}

export default connect(mapStateToProps, { addCategory })(CategoryList);