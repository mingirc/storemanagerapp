import React from 'react';
import { useLocation } from 'react-router-dom';

// HOC enhances the wrapped component with "location" variable.
const withLocation = WrappedComponent => {
    const WithLocation = props => {

        const location = useLocation();

        return <WrappedComponent location={location} {...props} />

    }
    return WithLocation;
}

export default withLocation;