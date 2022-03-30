import React from 'react';
import './CircularBlock.css'
import { Link } from 'react-router-dom';
import deleteIcon from '../assets/images/gray/delete.svg';
import editIcon from '../assets/images/gray/edit.svg';
import arrowIcon from '../assets/images/arrows-cw.svg';
import plusIcon from '../assets/images/gray/plus.svg';

// CircularBlocks used for product and category.
const CircularBlock = props => {
    
    const { 
        id, 
        imageUrl, 
        name, 
        price, 
        editClickHandler, 
        deleteClickHandler 
    } = props

    const toggleButton = () => {
        document.getElementById(`editContainer${id}`).classList.toggle('editButtonOpen');
        document.getElementById(`deleteContainer${id}`).classList.toggle('deleteButtonOpen');
        if(document.getElementById(`menuIcon${id}`).className === 'menuIconOpen'){
            document.getElementById(`menuIcon${id}`).className = 'menuIconClose';    
        }else{
            document.getElementById(`menuIcon${id}`).className = 'menuIconOpen';
        }
    }

    return(
        <React.Fragment>
        {(id || id === 0) ?
            <React.Fragment>
                <div className="outerContainer">
                    <div className="blockImageContainer" >
                        <img className="blockImage" alt={name} src={imageUrl} /> 
                    </div>
                    <div className="buttonContainer editButtonClose" id={`editContainer${id}`} onClick={() => editClickHandler(id)}>
                        <img className="icons" src={editIcon} alt="Edit" />
                    </div>
    
                    <div className="buttonContainer deleteButtonClose" id={`deleteContainer${id}`} onClick={() => deleteClickHandler(id)}>
                        <img className="icons" src={deleteIcon} alt="Delete" />
                    </div>

                    <div className="buttonContainer menuButtonClose" onClick={toggleButton} id={`menuContainer${id}`} >
                        <img className="menuIconClose" id={`menuIcon${id}`} src={arrowIcon} alt="Arrow" />
                    </div>

                </div>
            
                <div className="outerContainer">
                    <div className="caption">{name} {price && `£${parseFloat(price).toFixed(2)}`}</div>
                </div>
            </React.Fragment> :
            <React.Fragment>
            <Link to="addnew" style={{ textDecoration: 'none' }}>
                <div className="outerContainer">
                    <div className="blockImageContainer" style={{ display: 'flex', flexDirection: 'column' }} >
                        <img alt="Add New" src={plusIcon} />
                    </div>
                </div>
                <div className="outerContainer">
                    <div className="caption">{name}</div>
                </div>
                </Link>     
            </React.Fragment>
        }
        </React.Fragment>



    )
}

export default CircularBlock;