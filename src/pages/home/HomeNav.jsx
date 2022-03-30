import React from 'react';
import { Grid } from '@mui/material';
import MenuBlock from '../../components/renderProps/MenuBlock';
import cashierIcon from '../../assets/images/gray/cashregister.svg';
import inventoryIcon from '../../assets/images/gray/store.svg';
import reportsIcon from '../../assets/images/gray/report.svg';
import '../style.css';

// Highest order navigation page.
export const HomeNav = () => {
    return (
            <React.Fragment>
                <h1>Store Manager</h1>
                <Grid container spacing={0} justifyContent="center" alignItems="center">
                    <MenuBlock id="cashier" url="/cashier" buttonSize="big">
                    {() =>
                    <React.Fragment>
                        <figure className="figClass">
                            <img src={cashierIcon} alt="Cashier" />
                            <figcaption>Cashier</figcaption>
                        </figure>
                    </React.Fragment>
                    }
                    </MenuBlock>

                    <MenuBlock id="inventorymanagement" url="/inventorymanagement" buttonSize="big">
                    {() => 
                        <figure className="figClass">
                            <img src={inventoryIcon} alt="Inventory Management" />
                            <figcaption>Inventory Management</figcaption>
                        </figure>
                    }
                    </MenuBlock>

                    <MenuBlock id="reports" url="/reports" buttonSize="big">
                    {() => 
                        <figure className="figClass">
                            <img src={reportsIcon} alt="Reports" />
                            <figcaption>Reports</figcaption>
                        </figure>
                    }
                    </MenuBlock>

                </Grid>
            </React.Fragment>
    )
}