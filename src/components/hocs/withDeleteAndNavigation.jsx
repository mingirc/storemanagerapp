import React from 'react';
import withNavigation from './withNavigation';
import withDelete from './withDelete';

// HOC combines the delete and navigation enhancements.
const withDeleteAndNavigation = 
(WrappedComponent, obj, deleteFnc, objectListPath) => {

    const WithDeleteAndNavigation = props => {
        return(
            <WrappedComponent {...props} />
        )
    }
    return withNavigation(withDelete(
        WithDeleteAndNavigation, obj, deleteFnc
    ), objectListPath);
}

export default withDeleteAndNavigation;


