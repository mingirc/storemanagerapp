import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EnhancedTable from '../../../components/enhancedTable';
import { salesHeaders, salesProductHeaders } from '../../../data';
import ListHeaderBase from '../../../components/renderProps/ListHeaderBase';

const ListSales = props => {
    
    const { sales, salesId } = props;
    const navigate = useNavigate()
    const [ enhancedSales, setEnhancedSales ] = useState(sales);
  
    // To toggle show child list (product list) of a sales.
    const onRowClick = saleId => {
        if(saleId === parseInt(salesId)){
            navigate('/reports/sales')    
        }else{
            navigate(`/reports/sales/${saleId}`)
        }
    }

    const [ term, setTerm ] = useState('');

    // Search category by input term.
    useEffect(() => {

        let tempList = sales;

        // Search term with these properties.
        if(term){
            let regexp = new RegExp(term, 'gi')
            tempList = tempList.filter(
                ({ userName, paymentMethodName, dateTime, salesTotal }) => 
                userName.match(regexp) || 
                paymentMethodName.match(regexp) ||
                dateTime.match(regexp) ||
                salesTotal.toFixed(2).match(regexp)
                )
        }
        // 300ms timeout for waiting the typing end.
        const salesTimeout = setTimeout(() => {
            setEnhancedSales(tempList)
        }, 300)

        return () => clearTimeout(salesTimeout)

    }, [ term, sales ])

    // on Search Input change
    const onInputChange = e => {
        setTerm(e.target.value)
    }

    return(
        <React.Fragment>
            <ListHeaderBase
                isReqInput={enhancedSales.length > 0}
                onInputChange={onInputChange}
                inputValue={term}
            >
                {() => enhancedSales.length > 0 ? (
                    <EnhancedTable 
                    items={enhancedSales} 
                    headers={salesHeaders}
                    onRowClick={onRowClick}
                    childrenProperty={'productList'} 
                    childrenHeaders={salesProductHeaders} 
                    itemPerPage={5}
                    initialSort={{ propertyName: 'dateTime', direction: 'desc' }}
                    childParam={'salesId'}
                />
                ):
                <div style={{ marginLeft: '30px' }}>No sales found.</div>
                }
            </ListHeaderBase>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        sales: state.sales,
        users: state.users
    }
}

export default connect(mapStateToProps)(ListSales);
