import React, { useEffect } from 'react'
import './index.css';
import e from 'cors';
import { UseStateValue } from '../../contextStore';
//const imageURL = require('../../banner.png')

//props lifecycle-unlikely
//webpack issue
function Product({id, title, image, price, rating}) {
    const [{cart}, dispatch] = UseStateValue();
    const addToCart = () => {
        dispatch({type: 'ADD_TO_CART',
          item: {
            id,
            title,
            image,
            price,
            rating
      }
    })
    }
    return (
        <div className="product" id={id}>
            <div className="product__info">
            <p className="product__title">{title}</p>
            <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    /* creates an array of size of rating ie 5, fills it with empty values
                    and then use map to add a star to each one */
                    Array(rating).fill().map((_, index) => (
                        <p key={index} className="product__ratingStar">	&#11088;</p>
    ))
                }
            </div>
            </div>
            <img className="productImage" src={image} alt="product image" /> 
            <button className="cartButton product__addToBasket" onClick={addToCart}>Add To Basket</button>
        </div>
    )
}

export default Product;
