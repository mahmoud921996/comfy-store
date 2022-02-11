import React,{useEffect, useReducer} from 'react';
import { ADD_TO_CART, CLEAR_CART } from '../../actions';
import CartContext from './cartContext';
import reducer from './cartReducer';
import {REMOVE_CART_ITEM,
    TOGGLE_CART_ITEM_AMOUNT,
    COUNT_CART_TOTALS
} from '../../actions';


const getLocalStorage = () => {
    let cart = localStorage.getItem('cart')
    if (cart) {
      return JSON.parse(localStorage.getItem('cart'))
    } else {
      return []
    }
  }

const initialState={
    cart:getLocalStorage(),
    total_amount:0,
    total_items:0,
    shipping_fee: 534,
}

const CartState = ({children}) => {
    const [state,dispatch]=useReducer(reducer,initialState)

    //add to cart 
    const addToCart=(id, color, amount, product)=>{
        dispatch({type:ADD_TO_CART,payload:{id,color,amount,product}})
    }

    // toggle Amount
    const toggleAmount=((id,value)=>{
        dispatch({type:TOGGLE_CART_ITEM_AMOUNT,payload:{id,value}})
    })

    // remove item
    const removeItem=(id)=>{
        dispatch({type:REMOVE_CART_ITEM,payload:id})
    }

    const clearCart=()=>{
        dispatch({type:CLEAR_CART})
    }

    useEffect(() => {
        dispatch({ type: COUNT_CART_TOTALS })
        localStorage.setItem('cart', JSON.stringify(state.cart))
       
      }, [state.cart])

    return ( 
        <CartContext.Provider value={{...state,addToCart,toggleAmount,removeItem,clearCart}}>
            {children}
        </CartContext.Provider>
     );
}
 
export default CartState;