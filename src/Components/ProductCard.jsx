import React,{useState} from 'react'
import styled from 'styled-components';
import './../Css/ProductCard.css';
import {BiCodeAlt} from 'react-icons/bi';

const ProductCard = (props) => {
    const Container = styled.div`${props.css}`;
    return (
        <div className='product-card-body' >  
          <div className='product-card-content'>
            <Container dangerouslySetInnerHTML={{ __html: props.html}} />
          </div>
          <button className='get-code-button'><BiCodeAlt style={{fontSize : "20px"}}/>Get code</button>
        </div>
    )
}

export default ProductCard
