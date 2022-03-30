import React, { Component }from 'react';
import { connect } from 'react-redux';
import { signIn, signOut, addUser } from '../actions';
import { Grid } from '@mui/material';
import G_white from '../assets/images/G_white.svg';
import G_black from '../assets/images/G_black.svg';
import './auth.css';
import UpperDirButton from '../components/UpperDirButton';

import withLocation from '../components/hocs/withLocation';
import SignIn from './SignIn';

class Auth extends Component {

    // Connecting to Google Developer OAuth API.
    componentDidMount(){
        if(window.gapi){
            window.gapi.load('client:auth2', () => {
                window.gapi.client.init({
                    clientId: '899669243198-0n35h753p6cdobqfajp6ecsrvrpnarno.apps.googleusercontent.com',
                    scope: 'email'
                }).then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance()
                    this.onAuthChange(this.auth.isSignedIn.get())
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
            });    
        }
    }

    componentWillUnmount(){
        this.props.signOut();
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    onAuthChange = isSignedIn => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
            this.props.addUser(
                this.auth.currentUser.get().getBasicProfile().getEmail()
                            )
        } else {
            this.props.signOut();
        }
    }

    // Renders both SignOut and "Back" buttons on top of the app and pass route page as a children.
    // if not signed in then renders the SignIn component.
    render(){
        if(this.props.auth.isSignedIn === null){
            return null;
        } else if(this.props.auth.isSignedIn){
            
            // On sales report page, when an row expanded the location pathname includes salesId.
            // salesId parameter prevents to navigate upper menu. It needed to double click on "Back" button.
            // this code block (next 3 lines) is solving this issue.
            let regexp = new RegExp(/\/reports\/sales\/[0-9]+/, 'gi')
            let step = 1;
            this.props.location.pathname.match(regexp) && (step = 2)

            return (
                <React.Fragment>
                    <Grid container spacing={0} sx={{ paddingTop: '20px' }} alignItems="space-between" justifyContent="space-between">
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6} sx={{ display: 'flex', justifyContent: 'flex-start' }} >
                            {
                                (this.props.location.pathname !== '/') && 
                                <UpperDirButton step={step} />
                            }
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }} >
                        <button className="signOutButton" onClick={this.onSignOutClick}>
                                <img src={G_black} alt="Sign Out" />
                                <img src={G_white} alt="Sign Out" />
                                <span style={{ margin: '7px 10px 7px 34px' }}>Sign out</span>
                            </button>
                        </Grid>
                    </Grid>
                    {/* <hr /> */}
                    {this.props.children()}
                </React.Fragment>
            );
        }
        return <SignIn onSignInClick={this.onSignInClick} />
    }
}

const mapStateToProps = state => {
    return{ auth: state.auth }
}


export default connect(mapStateToProps, 
    { signIn, signOut, addUser })(withLocation(Auth));