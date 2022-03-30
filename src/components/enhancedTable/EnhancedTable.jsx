import {
  Box, Table,
  TableBody, TableCell, TableContainer, TablePagination, TableRow
} from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import EnhancedTableHead from './EnhancedTableHead';


// This table is used for reports pages as a common component.  
// Implemented from MUI's docs, but altered with needs of applications.
const EnhancedTable = props => {

  const { 
    items, 
    headers, 
    childrenProperty, 
    childrenHeaders, 
    itemPerPage, 
    initialSort, 
    onRowClick, 
    childParam 
  } = props;
  const [ rowsPerPage, setRowsPerPage ] = useState(itemPerPage || 10);
  const [ order, setOrder ] = useState(initialSort.direction); // asc or desc
  const [ orderBy, setOrderBy ] = useState(initialSort.propertyName); // column name for sorting.
  const [ page, setPage ] = useState(0);
  const params = useParams();


  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const getComparator = (order, orderBy) => {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  // This method is created for cross-browser compatibility, if you don't
  // need to support IE11, you can use Array.prototype.sort() directly
  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [ el, index ]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = 
  page > 0 ? Math.max(0, (1 + page) * rowsPerPage - items.length) : 0;

  const renderChildList = item => {
    let isSelected = params[childParam] == item.id;
      return (
        childrenProperty &&
      <TableRow sx={{ display: !isSelected && 'none' }}>
        <TableCell colSpan={headers.length} sx={{ boxShadow: isSelected && 'inset 1px 1px 10px 0px #dddddd' }}>
          <TableContainer>
            <Table>
              <EnhancedTableHead
                headCells={childrenHeaders}
                // order={order}
                // orderBy={orderBy}
                // onRequestSort={handleRequestSort}
              />
              <TableBody>
                {item[childrenProperty].map(childItem => {
                  return (
                    <TableRow key={`child - ${item.id}- ${childItem.id}`}>
                      {childrenHeaders.map(childHead => {
                        return (
                          <TableCell
                            key={`${childHead.name} - ${childItem.id} - ${childHead.name}`}
                            align={childHead.align}
                            scope="row"
                            style={{
                              color: childItem.isActive ? '#000000' : '#C4C4C4',
                              textDecoration: childItem.isActive ? 'none' : 'line-through',
                            }}
                          >
                            {childHead.name === 'imageUrl' ?
                            <img src={childItem[childHead.name]} alt={''} style={{ width: '50px', opacity: childItem.isActive ? '1.0' : '0.2' }} /> :
                            (typeof childItem[childHead.name] === 'number') ?
                            childItem[childHead.name].toFixed(2) :
                            childItem[childHead.name]
                             }
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </TableCell>
      </TableRow>
    )
  }

  return (
    <Box sx={{ width: '100%', marginBottom: '7vh' }}>
      <TableContainer>
        <Table>
          <EnhancedTableHead
            headCells={headers}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            childrenProperty={childrenProperty}
          />
          <TableBody>
            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
            {items && 
            stableSort(items, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(item => {
                let isSelected = params[childParam] == item.id;
                return (
                  <React.Fragment key={item.id}>
                    <TableRow onClick={onRowClick ? () => onRowClick(item.id) : null} sx={{ backgroundColor: isSelected && '#dddddd', cursor: onRowClick ? 'pointer': '' }}>
                      {headers.map(header => {
                        return (
                          <TableCell
                            key={`${item.id}-${header.name}`}
                            align={header.align}
                            scope="row"
                          >
                            {typeof item[header.name] === 'number'
                              ? item[header.name].toFixed(2)
                              : item[header.name]}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                    {renderChildList(item)}
                  </React.Fragment>
                );
              })}
            {emptyRows > 0 && (
              <TableRow
                key="empty row"
                style={{ height: 53 * emptyRows, }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[ 5, 10, 20, 50 ]}
        component="div"
        count={items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Show"
      />
    </Box>
  );
};

export default EnhancedTable;
