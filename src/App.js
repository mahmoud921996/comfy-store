import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/footer';
import Navbar from './components/Navbar';
import Sidebar from './components/sideBar';
import About from './pages/AboutPage';
import Checkout from './pages/checkout';
import ErrorPage from './pages/ErrorPage';
import SingleProduct from './pages/SingleProduct';
import Products from './pages/Products';
import Cart from './pages/Cart';
import PrivateRoute from './components/PrivateRoute';
import AuthWrapper from './pages/AuthWrapper';
import Hero from './components/Hero';
import Home from './pages/HomePage';
const App = () => {
    return ( 
      <AuthWrapper>
      <Router>
        <Navbar/>
        <Sidebar/>
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/about' exact>
            <About/>
          </Route>
          <Route path='/products' exact>
            <Products/>
          </Route>
          <Route path='/products/:id'>
            <SingleProduct/>
          </Route>
          <Route path='/cart'>
            <Cart/>
          </Route>
          <Route path='/checkout'>
            <Checkout/>
          </Route>
          <Route path='*'>
            <ErrorPage />
          </Route>
        </Switch>
        <Footer/>
      </Router>
      </AuthWrapper>
     );
}
 
export default App;