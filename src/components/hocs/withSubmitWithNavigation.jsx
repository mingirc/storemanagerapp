import React from 'react';
import withNavigation from './withNavigation';
import withSubmit from './withSubmit';

// HOC combines the submit and navigation enhancements.
const withSubmitAndNavigation = (
    WrappedComponent, objectListPath, action, obj, doReset, incrementId) => {

    const WithSubmitAndNavigation = props => {
        return(
            <WrappedComponent {...props} />
        )
    }
    return withNavigation(withSubmit(
        WithSubmitAndNavigation, action, obj, doReset, incrementId
                                    ), objectListPath);
}

export default withSubmitAndNavigation;


