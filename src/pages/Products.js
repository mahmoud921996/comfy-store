import React from 'react';
import styled from 'styled-components'
import PageHero from '../components/pageHero';
import Filter from '../components/Filter'
import Sort from '../components/Sort'
import ProductsList from '../components/productsList'

const Products =()=>{
  return (
    <main>
      <PageHero title='Products'/>
      <Wrapper className='page'>
        <div className='section-center products'>
          <Filter/>
        <div>
          <Sort/>
          <ProductsList/>
        </div>
        </div>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.div`
.products {
  display: grid;
  gap: 3rem 1.5rem;
  margin: 4rem auto;
}
@media (min-width: 768px) {
  .products {
    grid-template-columns: 200px 1fr;
  }
}
`
export default Products;