import React from 'react';
import { Grid } from '@mui/material';
import MenuBlock from '../../components/renderProps/MenuBlock';
import salesIcon from '../../assets/images/gray/graph-up.svg';
import inventoryIcon from '../../assets/images/gray/wallet-outline.svg';
import '../style.css';

// Reports navigation page.
export const Reports = () => {
    return(
            <React.Fragment>
                <h1>Reports</h1>
                <Grid container spacing={0} justifyContent="center" alignItems="center">
                    <MenuBlock id="sales" url="/reports/sales" buttonSize="big">
                    {() => 
                        <figure className="figClass">
                            <img src={salesIcon} alt="Sales Reports" />
                            <figcaption>Sales Reports</figcaption>
                        </figure>
                    }
                    </MenuBlock>
                    <MenuBlock id="inventory" url="/reports/inventory" buttonSize="big">
                    {() => 
                        <figure className="figClass">
                            <img src={inventoryIcon} alt="Inventory Reports" />
                            <figcaption>Inventory Reports</figcaption>
                        </figure>
                    }
                    </MenuBlock>
                </Grid>
            </React.Fragment>
    )
}