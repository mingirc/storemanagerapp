import React from 'react';
import { useNavigate } from 'react-router-dom';

// HOC enhance the wrapped component with the navigateToList function.
// which provides a nvigation to the list path.
const withNavigation = (WrappedComponent, path) => {

    const WithNavigation = props => {
        const navigate = useNavigate();

        const navigateToList = () => {
            navigate(path);
        }

        return(
            <WrappedComponent {...props} navigateToList={navigateToList} />
        )
    }

    return WithNavigation;

}

export default withNavigation;