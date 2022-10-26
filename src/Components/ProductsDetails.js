import React from 'react'
import { currencyFormatter } from "../util";
import { useMemo } from 'react';

const ProductsDetails = ({id,title,image,description,price,rating}) => {

const formattedPrice = useMemo(() => currencyFormatter(price), [price]);
  return (
    <div className='ProductsDetails'>
        <div className='rating'>
            <p>Rate: {rating?.rate}</p>
            <p>Count: {rating?.count}</p>
        </div>
        <img src={image} alt="img" />
        <h4 className='title'>{title}</h4>
        <h3 className='price'>{formattedPrice}</h3>
        <p className='desc'>{description}</p>
    </div>
  )
}

export default ProductsDetails