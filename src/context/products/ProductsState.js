import React,{useEffect, useReducer} from 'react';
import ProductsContext from './productsContext';
import reducer from './productsReducer';
import {SIDEBAR_OPEN,SIDEBAR_CLOSE,
    GET_PRODUCTS_BEGIN,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_SUCCESS,
    GET_SINGLE_PRODUCT_BEGIN,
    GET_SINGLE_PRODUCT_ERROR,
    GET_SINGLE_PRODUCT_SUCCESS
} from '../../actions';
import {products_url as url} from '../../utils/constants'
import axios from 'axios';

const initialState={
    isSidebarOpen:false,
    products:[],
    products_loading:false,
    products_error:false,
    featured_products:[],
    single_product_loading: false,
    single_product_error: false,
    single_product: {},

}


const ProductsState=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)
    const openSidebar=()=>{
        dispatch({type:SIDEBAR_OPEN})
    }
    const closeSidebar=()=>{
        dispatch({type:SIDEBAR_CLOSE})
    }

    const fetchProducts=async(url)=>{
        dispatch({type:GET_PRODUCTS_BEGIN})
        try{
            const response=await axios.get(url)
            const products=response.data
            dispatch({type:GET_PRODUCTS_SUCCESS,payload:products})
        }catch(error){
            dispatch({type:GET_PRODUCTS_ERROR})
        }

    }
    useEffect(()=>{
        fetchProducts(url)
    },[])

    const fetchSingleProduct= async(url)=>{
        dispatch({type:GET_SINGLE_PRODUCT_BEGIN})
        try{

            const response=await axios.get(url)
            const product=response.data;
            dispatch({type:GET_SINGLE_PRODUCT_SUCCESS,payload:product})
        }catch(error){
            dispatch({type:GET_SINGLE_PRODUCT_ERROR})
        }
    }


    return <ProductsContext.Provider value={{...state,openSidebar,closeSidebar,fetchSingleProduct}}>
        {children}
    </ProductsContext.Provider>
}

export default ProductsState