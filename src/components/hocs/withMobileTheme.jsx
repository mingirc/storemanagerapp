import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// HOC helps with the responsive values of the style properties.
// Example: style={{width: isMobile ? '100%' : '50%'}}
const withMobileTheme = WrappedComponent => {
    const WithMobileTheme = props => {

        const theme = useTheme();
        const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { defaultMatches: true });
        const isTablet = useMediaQuery(theme.breakpoints.down('lg'), { defaultMatches: true });

        return <WrappedComponent 
                    {...props} 
                    isMobile={isMobile} 
                    isTablet={isTablet} 
                    />

    }
    return WithMobileTheme
}
 
export default withMobileTheme;