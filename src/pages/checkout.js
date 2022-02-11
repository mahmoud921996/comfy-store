import React from 'react';
import styled from 'styled-components';
import PageHero from '../components/pageHero';

const Checkout =()=>{
    return(
        <Wrapper>
        <PageHero title='checkout'/>
        <div>Checkout  Page</div>
        </Wrapper>
    )
}
 const Wrapper=styled.div`
 height:100vh`
export default Checkout;