import React from 'react';
import {Link} from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { UseStateValue } from '../../../contextStore';
import { GetCartTotal } from '../../../reducer';
import './index.css';


function CartTotals() {
    const [{cart}, dispatch] = UseStateValue();
    return (
        <div className="carttotal">
            <CurrencyFormat 
            renderText={(value)=>(
            <>
            <p>
                Subtotal ({cart.length} items): <strong>${parseFloat(value.substring(1)).toFixed(2)}</strong>
            </p>
            <small className="carttotal__checkbox">
                <input type="checkbox"/> This order contains a gift
            </small>
            </>
            )}
            decimalScale={2} value={GetCartTotal(cart)} displayType={"text"} thousandSeparator={true} prefix={"$"}/>
          <Link to="/checkout">
            <button className="carttotal__button cartButton">Proceed to checkout</button>
          </Link>
        </div>
    )
}

export default CartTotals;
