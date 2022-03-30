import React from 'react';
import { Grid } from '@mui/material';
import G_original from '../assets/images/G_original.svg';
import logo_react from '../assets/images/logo_react.svg';
import logo_redux from '../assets/images/logo_redux.svg';
import logo_html from '../assets/images/logo_html.svg';
import logo_css from '../assets/images/logo_css.svg';
import logo_js from '../assets/images/logo_js.svg';
import logo_formik from '../assets/images/logo_formik.png';
import logo_eslint from '../assets/images/logo_eslint.svg';
import logo_mui from '../assets/images/logo_mui.png';
import withMobileTheme from '../components/hocs/withMobileTheme';
import './auth.css';


const SignIn = props => {

    const { onSignInClick, isMobile } = props;
    
    // SignIn page, notice and technologies sections.
    return(
        <React.Fragment>
            <h1>Store Manager App</h1>
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: '80px' }}>
                <div style={{ width: isMobile ? '90%' : '50%', backgroundColor: 'beige', padding: '20px', boxShadow: '1px 3px 8px rgb(120, 120, 120)' }}>
                    <h2>Important Notice:</h2>
                    <span style={{ whiteSpace: 'pre-wrap' }}>
                    {`This application is design and develop for only portfolio purposes. 
                    \nAll data and media are standing just for testing.
                    \nThere is not any (database) connection rather than Google OAuth API, 
all data regarding your operations will be lost if you refresh page or close your browser. And not any of data is stored in scope of this application regarding your operations.`}
                    </span>
                </div>

                <Grid container spacing={0} sx={{ padding: '50px' }} alignItems="center" justifyContent="center">
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }} >
                    <button className="signInButton" onClick={onSignInClick}>
                            <img src={G_original} alt="Sign in with Google" />
                            <span style={{ margin: '7px 10px 7px 7px', color: '#555555' }}>Sign in with Google</span>
                    </button>
                    </Grid>
                </Grid>
                <div style={{ width: isMobile ? '90%' : '50%', padding: '20px' }}>
                    <h2>Technologies used for this project</h2>
                    <div>
                        <img src={logo_html} className="logos" />
                        <img src={logo_css} className="logos" />
                        <img src={logo_js} className="logos" />
                        <img src={logo_react} className="logos" />
                        <img src={logo_redux} className="logos" />
                        <img src={logo_mui} className="logos" />
                        <img src={logo_formik} className="logos" />
                        <img src={logo_eslint} className="logos" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default withMobileTheme(SignIn);