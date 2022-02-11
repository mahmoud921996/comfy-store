import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartContext from '../context/cart/cartContext';
import CartColumns from './cartColumns';
import CartItem from './cartItem';
import CartTotals from './cartTotals';

const CartContent=()=>{
  const cartContext=useContext(CartContext)
  const {cart,clearCart}=cartContext;
  return(
    <Wrapper className='section section-center'>
      <CartColumns/>
      {cart.map((item)=>{
        return <CartItem key={item.id} {...item} />
      })}
      <hr/>
      <div className='link-container'>
        <Link to='/products' className='link-btn'>
          continue shopping
        </Link>
        <button
          type='button'
          className='link-btn clear-btn'
          onClick={clearCart}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals/>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.link-container {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}
.link-btn {
  background: transparent;
  border-color: transparent;
  text-transform: capitalize;
  padding: 0.25rem 0.5rem;
  background: var(--clr-primary-5);
  color: var(--clr-white);
  border-radius: var(--radius);
  letter-spacing: var(--spacing);
  font-weight: 400;
  cursor: pointer;
}
.clear-btn {
  background: var(--clr-black);
}
`
export default CartContent;