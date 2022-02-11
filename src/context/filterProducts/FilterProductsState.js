import React,{useContext, useEffect, useReducer} from 'react';
import FilterProductsContext from './filterProductsContext';
import ProductsContext from '../products/productsContext';
import reducer from './filterProductsReducer';
import {CLEAR_FILTERS,
    FILTER_PRODUCTS,
    LOAD_PRODUCTS,
    SET_GRIDVIEW,
    SET_LISTVIEW,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
UPDATE_SORT}
 from '../../actions';
import FilterContext from './filterProductsContext';

const initialState={
    filtered_products: [],
    all_products: [],
    grid_view: true,
    sort: 'price-lowest',
   filters:{
       text:'',
       category:'all',
       company:'all',
       color:'all',
       min_price: 0,
       max_price: 0,
       price: 0,
       shipping:false
   }
}


 const FilterState = ({children}) => {
     const productsContext=useContext(ProductsContext)
     const {products}=productsContext
     const [state,dispatch]=useReducer(reducer,initialState)
     //load products
     useEffect(()=>{
        dispatch({type:LOAD_PRODUCTS,payload:products})
     },[products])

        useEffect(()=>{
            dispatch({type:FILTER_PRODUCTS})
            dispatch({type:SORT_PRODUCTS})

        },[products,state.sort,state.filters])
  

     //update filters
     const updateFilters=(e)=>{
         let name=e.target.name;
         let value=e.target.value;
         if (name === 'category') {
             value = e.target.textContent
            }
            if(name==='color'){
                value=e.target.dataset.color
            }
            if (name === 'price') {
                value = Number(value)
              }
              if(name==='shipping'){
                  value=e.target.checked
              }
           
            dispatch({type:UPDATE_FILTERS,payload:{name,value}})

     }
     // updateSort
     const updateSort=(e)=>{
         const value=e.target.value;
         dispatch({type:UPDATE_SORT,payload:value})
     }
     // set grid view
     const setGridView=()=>{
         dispatch({type:SET_GRIDVIEW})
     }
     //set list view
     const setListView=()=>{
         dispatch({type:SET_LISTVIEW})
     }

     //clear filters 
     const clearFilters=()=>{
         dispatch({type:CLEAR_FILTERS})
     }
     return (
         <FilterContext.Provider value={{...state,updateFilters,updateSort,setGridView,setListView,clearFilters}}>
             {children}
         </FilterContext.Provider>
      );
 }
  
 export default FilterState;