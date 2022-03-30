import React from 'react';
import withMobileTheme from './hocs/withMobileTheme';
import { outerContainer, innerContainer } from './Footer.style';

const Footer = () => {
    return (
    <div style={outerContainer}>
        <span style={innerContainer}>
            Designed and developed by&nbsp;
            <a href="https://linkedIn.com/in/cemal-mingir" target="blank">
                Cemal Mingir
            </a>
            .&nbsp;&copy;&nbsp;All rights reserved.
        </span>
    </div>
    )
}

export default withMobileTheme(Footer);