import React from 'react'
import './index.css';
import { UseStateValue } from '../../../contextStore';

function CartProduct({image,title,price,id,rating}) {
    const [{basket}, dispatch] = UseStateValue();
    const removeFromBasket = () => {
        console.log(id)
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }
    return (
        <div className="cartProduct">
            <img src={image} alt=""/>
            <div className="cartProduct__info">
            <p className="cartProduct__title">{title}</p>
            <p className="cartProduct__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="cartProduct__rating">
                {Array(rating)
                  .fill()
                  .map((_,i)=>(
                      <p key={i}>&#11088;</p>
                  ))
                  }
            </div>
            <button onClick={removeFromBasket} className="cartProduct__button cartButton">Remove from cart</button>
            </div>    
        </div>
    )
}

export default CartProduct;
