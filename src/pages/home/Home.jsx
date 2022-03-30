import React from 'react';
import { Outlet } from 'react-router-dom';

// All pages shown under this Outlet.
export const Home = () => {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    )
}