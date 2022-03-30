import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import React from 'react';

// This is the child component of EnhancedTable.
// Implemented from MUI's docs, but altered with needs of applications.
const EnhancedTableHead = props => {
    
    const { 
      headCells, 
      order, 
      orderBy, 
      onRequestSort, 
      childrenProperty 
    } = props;
    const createSortHandler = property => event => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          {headCells.map(headCell => (
            headCell.name !== childrenProperty &&
            <TableCell
              key={headCell.id}
              align={headCell.align}
              sortDirection={orderBy && 
                (orderBy === headCell.name ? order : false)}
              sx={{ fontWeight: '700' }}
            >{orderBy ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.name ? order : 'asc'}
                onClick={createSortHandler(headCell.name)}
              >
                {headCell.label}
              </TableSortLabel>
              ) :
              headCell.label
            }
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  // EnhancedTableHead.propTypes = {
  //   onRequestSort: PropTypes.func.isRequired,
  //   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  //   orderBy: PropTypes.string.isRequired,
  // };

export default EnhancedTableHead;