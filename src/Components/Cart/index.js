import React from 'react'
import {UseStateValue} from '../../contextStore';
import CartProduct from './CartProduct';
import CartTotals from './CartTotals';
import './index.css';

function Cart() {
    const [{cart}] = UseStateValue();
    const [{user}] = UseStateValue();
    const bannerImageMouseLeaveAnimation=(e)=>{
        e.currentTarget.classList.add('cart__banner__mouseOut')
    }
    return (
        <div className="cart">
            <div className="cart__left">
            {/*ADD ADD ABOVE CARt */}
            <img className="cart__banner" onMouseLeave={(e)=>{bannerImageMouseLeaveAnimation(e)}} src="/images/cartbanner.jpg" alt="promo banner"/>
            {user == null ? (
                <div><h3>Please Login!</h3></div>
            ) : ''}
            {cart?.length == 0 ?(
                <div>
                    <h3>Your Shopping Basket is Empty</h3>
                </div>
            ):
            (<h2 className="cart__title">Your Shopping Basket</h2>)}
            {
                cart?.map(item=>(
                    <CartProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}/>
                ))}
            
        </div>
        {cart.length > 0 && (
            <div className="cart__right">
                <CartTotals/>
            </div>
        )}
        </div>
    )}
    

export default Cart;
