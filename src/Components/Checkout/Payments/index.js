import React from 'react';
import {
    CardElement,
    StripeProvider,
    Elements,
    injectStripe,
  } from 'react-stripe-elements';
  import CurrencyFormat from 'react-currency-format';
  import { UseStateValue } from '../../../contextStore';
  import './index.css';
  import { GetCartTotal } from '../../../reducer';

const handleFormSubmit = (e, props) =>{
    const cardElement = this.props.elements.getElement('card');
    this.props.stripe
      .createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {name: 'xxx'},
      })
      .then(({paymentMethod}) => {
        console.log('Received Stripe PaymentMethod:', paymentMethod);
      });

    // You can also use confirmCardPayment with the PaymentIntents API automatic confirmation flow.
    // See our confirmCardPayment documentation for more:
    // https://stripe.com/docs/stripe-js/reference#stripe-confirm-card-payment
    this.props.stripe.confirmCardPayment('{PAYMENT_INTENT_CLIENT_SECRET}', {
      payment_method: {
        card: cardElement,
      },
    });

    this.props.stripe.confirmCardSetup('{PAYMENT_INTENT_CLIENT_SECRET}', {
        payment_method: {
          card: cardElement,
        },
      });

      this.props.stripe.createToken({type: 'card', name: 'xxx'});

      this.props.stripe.createSource({
        type: 'card',
        owner: {
          name: 'xxx',
        },
      });
    };
  

   /* e.preventDefault()
    e.stopPropagation()
    this.props.stripe.createToken().then(payload => console.log(payload))
    this.props.stripe
    .createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {name: 'xxx'},
    })
    .then(({paymentMethod}) => {
      console.log('Received Stripe PaymentMethod:', paymentMethod);
    });
    debugger;*/

  
  const _CardForm = () => {
      return (
        <form className="Checkout__form" onSubmit={(e) => {handleFormSubmit(e, this.props)}}>
          <CardElement hidePostalCode={true}/>
          <button className="Checkout__button">Pay</button>
          <p className="Checkout__formDisclaimer">Please enter 4242 4242 4242 4242 for stripe checkout to work</p>
        </form>      
      )
    }
  
  const CardForm = injectStripe(_CardForm)
  
  const Checkout = () => {
    const [{cart}, dispatch] = UseStateValue();
    
      return (
        <div className="Checkout">
          <h1 className="Checkout__heading">Complete Your Order</h1>
          <CurrencyFormat 
            renderText={(value)=>(
            <>
            <p className="Checkout__priceAndItems">
                Total ({cart.length} items): <strong className="Checkout__totalCost">{value}</strong>
            </p>
            </>
            )}
            decimalScale={2} value={GetCartTotal(cart)} displayType={"text"} thousandSeparator={true} prefix={"$"}/>
          <Elements>
            <CardForm />
          </Elements>
        </div>
      )
    }
  
  export default Checkout;
 
