import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './MenuBlock.css';
import { menuBlock, noDecorationLink } from './MenuBlock.style';

const MenuBlock = props => {

    const { children, id, url, buttonSize } = props
    
    const toggleClass = () => {
        document.getElementById(id).classList.toggle('square')
    }

    return(
        <React.Fragment>
            <Grid item xl={3} lg={3} md={4} sm={4} xs={6} 
                style={menuBlock}> 
                <Link to={url} style={noDecorationLink}>
                    <div 
                        id={id} 
                        className={`container circle ${buttonSize}`} 
                        onMouseOver={toggleClass} 
                        onMouseOut={toggleClass}
                    >
                        {children()}
                    </div>
                </Link>
            </Grid>
        </React.Fragment>
    )
}

export default MenuBlock;