import React from 'react';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';

// A base component for listing.
// Provides search input, category selection, 
// renders circular list from categories and products, 
// accepts sales and inventory report tables as children
// provides add/edit/delete Modals for categories and products.
const ListHeaderBase = props => {
  const {
    isReqInput,
    onInputChange,
    inputValue,
    isReqSelect,
    onSelectChange,
    selectValue,
    renderSelectOptions,
    renderList,
    addComponent,
    editComponent,
    deleteComponent,
    children
  } = props;
  return (
    <React.Fragment>
      <Grid
        container
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
        sx={{ marginBottom: '10px' }}
      >
        {isReqInput && (
          <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
            <FormControl sx={{ minWidth: '100%' }}>
              <TextField
                variant="outlined"
                label="Search"
                size="small"
                onChange={e => onInputChange(e)}
                value={inputValue}
              />
            </FormControl>
          </Grid>
        )}
        {isReqSelect && (
          <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
            <FormControl sx={{ minWidth: '100%' }} size="small">
              <InputLabel id="categoriesLabel">Filter by Categories</InputLabel>
              <Select
                id="categories"
                labelId="categoriesLabel"
                onChange={e => onSelectChange(e)}
                value={selectValue}
                label="Filter by Categories"
              >
                <MenuItem value={''}>Show all</MenuItem>
                {renderSelectOptions}
              </Select>
            </FormControl>
          </Grid>
        )}
      </Grid>
      <hr />
      {renderList}
      {addComponent}
      {editComponent}
      {deleteComponent}
      {children && children()}
    </React.Fragment>
  );
};

export default ListHeaderBase;
