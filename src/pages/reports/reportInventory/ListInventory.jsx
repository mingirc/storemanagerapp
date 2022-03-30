import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { inventoryHeaders } from '../../../data';
import EnhancedTable from '../../../components/enhancedTable';
import enhanceProductToInventory from '../../../helpers/enhanceProductToInventory';
import ListHeaderBase from '../../../components/renderProps/ListHeaderBase';

const ListInventory = props => {
  const { products, categories } = props;
  const enhancedList = enhanceProductToInventory(products, categories);
  const [ inventoryList, setInventoryList ] = useState(enhancedList);
  const [ term, setTerm ] = useState('');

  // on Search Input change
  const onInputChange = e => {
    setTerm(e.target.value);
  };

  // Search category by input term.
  useEffect(() => {
    let tempList = enhancedList;

    if (term) {
      let regexp = new RegExp(term, 'gi');

      // Search term with these properties.
      tempList = tempList.filter(
        ({ sku, name, categoryName, stock, price, total }) =>
          sku.match(regexp) ||
          name.match(regexp) ||
          categoryName.match(regexp) ||
          stock.toString().match(regexp) ||
          price.toFixed(2).match(regexp) ||
          total.toFixed(2).match(regexp)
      );
    }

    // 300ms timeout for waiting the typing end.
    const inventoryTimeout = setTimeout(() => {
      setInventoryList(tempList);
    }, 300);

    return () => clearTimeout(inventoryTimeout);
  }, [ term, enhancedList ]);

  return (
    <React.Fragment>
      <ListHeaderBase 
        isReqInput={inventoryList.length > 0} 
        onInputChange={onInputChange} inputValue={term}
      >
        {() => inventoryList.length > 0 ?  (
          <EnhancedTable 
            items={inventoryList} 
            headers={inventoryHeaders} 
            initialSort={{ propertyName: 'sku', direction: 'desc' }}    
          />
        ): 
        <div style={{ marginLeft: '30px' }}>No item found.</div>
        }
      </ListHeaderBase>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products,
    categories: state.categories,
  };
};

export default connect(mapStateToProps)(ListInventory);
