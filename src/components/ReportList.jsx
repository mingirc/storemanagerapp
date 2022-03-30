import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// Sales and Inventory Report Pages' base.
const ReportList = props => {
    
    const { headers, list, colSpan, grandTotal } = props;

    return(
            <TableContainer sx={{ paddingBottom: '80px', maxHeight: 'calc(100vh - 300px)' }}>
                <Table sx={{ borderCollapse: 'separate', padding: '0 50px' }}>
                    <TableHead>
                        <TableRow>
                            {headers}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list}
                        <TableRow>
                            <TableCell colSpan={colSpan} sx={{ borderTop: '50px solid transparent', borderBottom: 'none' }}>

                            </TableCell>
                            <TableCell align="right" sx={{ fontWeight: '700', borderTop: '50px solid transparent', borderBottom: 'none' }}>
                                Grand Total
                            </TableCell>                    
                            <TableCell align="right" sx={{ fontWeight: '700', borderTop: '50px solid transparent', borderBottom: 'none' }}>
                                {grandTotal}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
    )
}

export default ReportList;