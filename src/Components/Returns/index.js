import React, {useState} from 'react';
import './index.css';

function Returns() {
    const [returnOrOrder, setReturnOrOrder] = useState('Returns');
    const [emailText, setEmailText] = useState('');

    const styleReturnsAndOrdersHeader = (e) => {
        return ( document.querySelector('.active').classList.remove('active'),
        e.currentTarget.classList.add('active')
        )
    }
    const toggleReturnsAndOrdersHeader = (e) => {
        if(e.currentTarget.classList.contains('active')){
        setReturnOrOrder(e.currentTarget.innerHTML)
        } else{
            styleReturnsAndOrdersHeader(e)
            setReturnOrOrder(e.currentTarget.innerHTML)
        }
        };
        const handleFormSubmit = (e) => {
            e.preventDefault()
            if(document.querySelector('.returns__email').value !== '' &&
               document.querySelector('#returns__receiptNumber').value !== ''
            ){
                document.querySelector('.returnsAndOrders__success').style.display = 'block'
                setTimeout(function(){
                    document.querySelector('.returnsAndOrders__success').style.display = 'none'
                    document.querySelector('.returnsAndOrders__forms').reset()
                } ,4000)
            }
        }
    return (
        <>
        <div className="returnsAndOrders__wrapper">
        <div className="returnsAndOrders">
            <div className="returnsAndOrders__Selectors">
              <h3 onClick={e => toggleReturnsAndOrdersHeader(e)} className="returnsAndOrders__Selector selector1 active">Returns</h3>
              <h3 onClick={e => toggleReturnsAndOrdersHeader(e)} className="returnsAndOrders__Selector selector2">Orders</h3>
            </div>
            <form className="returnsAndOrders__forms" onSubmit={(e)=> handleFormSubmit(e)}>
            <div className="returns__labelFormWrapper">
            <label className="returns__label" htmlFor="returns__email">Email</label>
            <input className="returns__email" type="email" placeholder="" onChange={(e)=>setEmailText(e.target.value)}></input>
            </div>
            <div className="returns__labelFormWrapper">
            <label className="returns__label" htmlFor="returns__receiptNumber">{
            returnOrOrder == 'Returns' ?
            'Recipt Number' : 'Order Number'}</label>
            <input id="returns__receiptNumber" type="text" placeholder=""></input>
            </div>
            <div className="returns__labelFormWrapper">
            <label className="returns__label" htmlFor="returns__message">
                {returnOrOrder == 'Returns' ? 'Why do you want to return the product?':
                'Why do you want to cancel your order?'}
            </label>
            <textarea id="returns__text" cols="40" rows="10" id="returns__message"></textarea>
            </div>
            <div className="returnsAndOrders__disclaimer">We will contact you within 48 hours to let you know the success of your claim.
            </div>
            <input className="returnsAndOrders__submit" type="submit"></input>
            </form>
            <div className="returnsAndOrders__success">We will send you a message with a response to:<span className="returnsAndOrders__successEmail">{emailText}</span></div>
        </div>
        </div>
        </>
    )
}

export default Returns;
