import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {StripeProvider} from 'react-stripe-elements';
import "./App.css";
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Returns from './Components/Returns';
import Checkout from "./Components/Checkout/Payments";
import {auth} from './firebase';
import {UseStateValue} from './contextStore';
/*import { Nav } from "./ComponentsPractice/Nav";
import Shop from "./ComponentsPractice/Shop";
import LoginPage from "./ComponentsPractice/Login";
import Home from "./ComponentsPractice/Home";
import SignUp from "./ComponentsPractice/SignUp";
import Animations from "./ComponentsPractice/Animations";
import Shop2 from "./Compenents2practice/Shop2";
import Login from "./ComponentsPractice/loginpage";
import { Star } from "./ComponentsPractice/Dashboard";
*/
class Profile extends React.Component {
  render() {
    return <div>Profile</div>;
  }
}
const Amazon = () =>{
  return<div>Amazon</div>
}


function App() {
  const [{cart, user}, dispatch] = UseStateValue();
  useEffect(()=>{
    //adds login listener at componentDidMount to check if user is logged in
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      authUser ? 
      // user is logged in
      dispatch({type: 'SET_USER', user: authUser}) :
      //user is logged in
      dispatch({type: 'SET_USER', user: null})
    })
    //return in useEffect is componentWillUnmount- ie cleanup
    return () => {
      unsubscribe()
    }
  },[])
  return (
    <div>
      <StripeProvider apiKey="pk_test_51Gyz4BGxwseyMoygrAGtTXAmmF0wZwxvGDbduY1uKYOLqlotd57ppwUbOMViF8tUno7hzmQBv43a1FGlwFEpN8ok00eYwjqNbY">
      <BrowserRouter>
        <Route exact path="/">
          <Header />
          <Home/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/cart">
          <Header />
          <Cart/>
        </Route>
        <Route exact path="/returns&orders">
          <Header/>
          <Returns/>
        </Route>
        <Route exact path="/checkout">
          <Header/>
          <Checkout/>
        </Route>
      </BrowserRouter>
      </StripeProvider>
    </div>
  );
}

export default App;

/*

 <Route exact path="/loginpage" component={Login} />
        <Route exact path="/dashboard" component={Star} />
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/animations" component={Animations} />
        <Route exact path="/shop2" component={Shop2} />

*/