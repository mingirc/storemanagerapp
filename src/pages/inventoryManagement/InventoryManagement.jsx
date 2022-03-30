import React from 'react';
import MenuBlock from '../../components/renderProps/MenuBlock';
import { Grid } from '@mui/material';
import categoryIcon from '../../assets/images/gray/categories.svg';
import productIcon from '../../assets/images/gray/tags.svg';
import '../style.css';

// Inventory Management navigation page.
const InventoryManagement = () => {

        return(
            <React.Fragment>
                <h1>Inventory Management</h1>
                <Grid container spacing={0} style={{ marginTop: '30px' }} alignItems="center" justifyContent="center">
                    <MenuBlock id="categories" url="/inventorymanagement/categorymanagement" buttonSize="big">
                    {() => 
                        <figure className="figClass">
                            <img src={categoryIcon} alt="Category Management" />
                            <figcaption>Category Management</figcaption>
                        </figure>
                    }
                    </MenuBlock>
                    <MenuBlock id="products" url="/inventorymanagement/productmanagement" buttonSize="big">
                    {() => 
                        <figure className="figClass">
                            <img src={productIcon} alt="Product Management" />
                            <figcaption>Product Management</figcaption>
                        </figure>
                    }
                    </MenuBlock>
                </Grid>
            </React.Fragment>
        )
}

export default InventoryManagement