import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartContent from '../components/CartContent';
import PageHero from '../components/pageHero';
import CartContext from '../context/cart/cartContext';

const Cart =()=>{
  const cartContext=useContext(CartContext)
  const {cart}=cartContext
  if (cart.length < 1) {
    return (
      <Wrapper className='page-100'>
        <div className='empty'>
          <h2>Your cart is empty</h2>
          <Link to='/products' className='btn'>
            fill it
          </Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <main>
      <PageHero title='cart' />
      <Wrapper className='page'>
        <CartContent />
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`
export default Cart;