import React,{useEffect} from 'react'
import styled from 'styled-components';
import './../Css/ProductCard.css';

const ProductCard = (props) => {
    const Container = styled.div`${props.css}`;
    return (
        <div className='product-card-body'>  
          <div className='product-card-content'>
            <Container dangerouslySetInnerHTML={{ __html: props.html}} />
          </div>
        </div>
    )
}

export default ProductCard
