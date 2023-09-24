import React from 'react'
import styled from 'styled-components';

const ProductCard = (props) => {
    const Container = styled.div`${props.css}`;
    return (
    <div>    
    <Container dangerouslySetInnerHTML={{ __html: props.html}} />
    </div>
  )
}

export default ProductCard
