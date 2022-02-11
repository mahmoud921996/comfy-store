import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';

import ProductsState from './context/products/ProductsState';
import FilterProductsState from './context/filterProducts/FilterProductsState';
import CartState from './context/cart/CartState';
import {Auth0Provider} from '@auth0/auth0-react'
import UserState from './context/User/UserState';
import FilterState from './context/filterProducts/FilterProductsState';


// dev-xgpd798s.us.auth0.com 
// DAS1rdZesaKiGfVvcNG8ytekC6hEteBo 


ReactDOM.render(
    <Auth0Provider
    domain='dev-xgpd798s.us.auth0.com'
    clientId='DAS1rdZesaKiGfVvcNG8ytekC6hEteBo'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
<ProductsState>
<FilterState>
<CartState>
  <UserState>
<App/>
</UserState>
</CartState>
</FilterState>
</ProductsState>
</Auth0Provider>
,document.querySelector('#root'))