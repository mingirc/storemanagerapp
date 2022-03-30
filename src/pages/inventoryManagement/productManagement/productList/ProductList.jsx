import React, { useState, useEffect } from 'react';
import  { useNavigate, useParams } from 'react-router-dom';
import ProductDelete from '../productDelete/ProductDelete';
import { connect } from 'react-redux';
import { addProduct } from '../../../../actions';
import CircularBlock from '../../../../components/CircularBlock'
import { Grid, MenuItem } from '@mui/material';
import ListHeaderBase from '../../../../components/renderProps/ListHeaderBase';
import ProductEdit from '../productEdit/ProductEdit';
import ProductAdd from '../productAdd/ProductAdd';
import AddAddNewButton from '../../../../components/renderProps/AddAddNewButton';

const ProductList = props => {

    const { products, categories } = props
    const [ terms, setTerms ] = useState({
        searchTerm: '',
        filterValue: ''
    })
    const [ productList, setProductList ] = useState(products);

    let navigate = useNavigate()
    let params = useParams()

    // Apply search and filter on input or select values change.
    useEffect(() => {
        let tempList = products

        // Search product with these properties.
        if(terms.searchTerm){
            let regexp = new RegExp(terms.searchTerm, 'gi')
            tempList = tempList.filter(({ name, sku }) => 
                (name.match(regexp)) || sku.match(regexp))  
        }

        //Filter products if any category selected.
        if(terms.filterValue !== ''){
            tempList = tempList.filter(({ categoryId }) => 
                categoryId === parseInt(terms.filterValue))
        }

        // wait typing end.
        const productTimeOut = setTimeout(() => {
            setProductList(tempList)
        }, 300)


        return () => clearTimeout(productTimeOut)

    }, [ terms, products, categories ])

    const deleteClickHandler = id => {
        return navigate(`/inventorymanagement/productmanagement/delete/${id}`)
    }

    const editClickHandler = id => {
        return navigate(`/inventorymanagement/productmanagement/edit/${id}`)
    }

    // on search input change
    const onInputChange = e => {
        setTerms({ ...terms, searchTerm: e.target.value })
    }

    // on category select change
    const onSelectChange = e => {
        setTerms({ ...terms, filterValue: e.target.value })
    }

    //Render option (category) list.
    const renderCategoryOptions = () => {
        if(categories.length > 0) {
            return categories.map(({ id, name }) => {
                return (
                    <MenuItem key={id} value={id}>{name}</MenuItem>
                )
            })
        }else{
            return null
        }

    }

    // Check if the category exists.
    const categoryExists = categoryId => {
        let checkList = [];
        categories.map(category => {
            if(category.id === parseInt(categoryId)) checkList.push(category)
        })

        if(checkList.length > 0) return true;

        return false;
    }

    const renderProductList = () => {
        if(productList.length > 0 && categories.length > 0){
            return productList.map(
                ({ id, categoryId, name, price, imageUrl }) => {
                // do not list products if their category does not exist.
                if(categoryExists(categoryId)){
                    return (
                        <Grid item xl={3} lg={3} md={4} sm={6} xs={12} key={id}>
                            <CircularBlock 
                                id={id} 
                                name={name} 
                                price={price} 
                                imageUrl={imageUrl} 
                                deleteClickHandler={deleteClickHandler} 
                                editClickHandler={editClickHandler} 
                            />
                        </Grid>
                    )
                }
            })
        }else{
            return null
        }

    }

    return(
        <ListHeaderBase
            isReqInput
            onInputChange={onInputChange}
            inputValue={terms.searchTerm}
            isReqSelect
            onSelectChange={onSelectChange}
            selectValue={terms.filterValue}
            renderSelectOptions={renderCategoryOptions()}
            renderList={
                <AddAddNewButton>{() => renderProductList()}</AddAddNewButton>
            }
            addComponent={params.action === 'addnew' && <ProductAdd />}
            editComponent={
                params.editProductId && 
                <ProductEdit id={params.editProductId} />
            }
            deleteComponent={
                params.deleteProductId && 
                <ProductDelete id={params.deleteProductId} />
            } 
        />
        )
}


const mapStateToProps = state => {
    return {
        products: state.products,
        categories: state.categories
    }
}

export default connect(mapStateToProps, { addProduct })(ProductList)