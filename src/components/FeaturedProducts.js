import React,{useContext} from 'react';
import styled from 'styled-components';
import ProductsContext from '../context/products/productsContext';
import Loading from './loading';
import Product from './Product';
import Error from './Error';
import { Link } from 'react-router-dom';


const FeaturedProducts=()=>{
  const productsContext=useContext(ProductsContext)
  const {featured_products:products,
    products_loading:loading,
    products_error:error
  }=productsContext;
  if(loading){
    return <Loading/>
  }
  if(error){
    return <Error/>
  }

  return (
    <Wrapper className='section'>
      <div className='title'>
        <h2>featured products</h2>
        <div className='underline'></div>
      </div>
      <div className='section-center featured'>
        {products.slice(0, 3).map((product)=>{
         return <Product key={product.id} {...product}/>
        })}
      </div>
      <Link to='/products' className='btn'>
        All products
      </Link>
    </Wrapper>
  )
}


 const Wrapper=styled.section`
 background: var(--clr-grey-10);
 .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
 `
export default FeaturedProducts;