import React, { useContext } from 'react';
import FilterContext from '../context/filterProducts/filterProductsContext';
import GridView from './GridView';
import ListView from './ListView';
const ProductList =()=>{
    const filterContext=useContext(FilterContext)
    const {filtered_products:products,grid_view}=filterContext;


    if(products.length<1){
        return (
            <h5 style={{ textTransform: 'none' }}>
            Sorry, no products matched your search...
             </h5>
        )
    }
    if(grid_view === false){
        return <ListView products={products}/>
    }

   return <GridView products={products}/>
}
 
export default ProductList;