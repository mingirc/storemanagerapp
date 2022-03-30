import React from 'react';
import ListSales from './ListSales'
import { useParams } from 'react-router-dom';

export const ReportSales = () => {

    const { salesId } = useParams();

    return(
        <React.Fragment>
            <h1>Sales Report</h1>
            <ListSales salesId={salesId} />
        </React.Fragment>
    )    

}