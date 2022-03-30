import React from 'react';
import { Container } from '@mui/material';

class ErrorBoundry extends React.Component {

    constructor(props) {
        super(props);
    }

    state = { hasError: false }

    static getDerivedStateFromError(){
        return { hasError: true };
    }


    render() { 
        if(this.state.hasError){
            return  (
            <Container 
                style={{
                    backgroundColor: 'white', 
                    minHeight: '100vh', 
                    overflowX: 'hidden', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center'
                    }}>
                <h1 style={{ fontSize: '100px', fontWeight: '700', opacity: '0.3', marginTop: '-200px' }}>
                    Sorry
                </h1>
                <h2 style={{ textAlign: 'center' }}>
                    An error occured and captured by ErrorBoundry component.
                </h2>
            </Container>
            )
        }
        return this.props.children
            
    }
}
 
export default ErrorBoundry;