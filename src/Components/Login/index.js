import React, {useState} from 'react';
import "./index.css";
import {Link, useHistory} from "react-router-dom";
import {auth} from '../../firebase';

function Login() {
    const history = useHistory();
    const [emailText, setEmailText] = useState('')
    const [passwordText, setPasswordText] = useState('')

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(emailText, passwordText).then( auth =>{
           history.push('/')
        }).catch(error => alert(error.message))
        console.log(emailText, passwordText)
    }
    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(emailText, passwordText).then( auth =>{
            history.push('/')
        }).catch(error=> alert(error.message))
    }
    return (
        <div className="login">
            <Link to="">
            <img
            className="login__brand"
            src={require('../../images/login.jpg')}
            alt="Amazon logo"
            />
            </Link>
            <div className="login__container">
            <h1>Sign in</h1>
            <form>
            <h5>E-mail</h5>
            <input value={emailText} onChange={e => setEmailText(e.target.value)} type="email"/>
            <h5>Password</h5>
            <input value={passwordText} onChange={e => setPasswordText(e.target.value)} type="password"></input>
            <button onClick={e => signIn(e)} type="submit" className="login__signInButton">Sign In</button>
            </form>
            <p> By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Policy, Cookies Notice and our Internet-Based Ads Notice.  </p>
            <button onClick={e => signUp(e)} className="login__createAccount">Create your Amazon Account</button>
            </div> 
        </div>
    )
}

export default Login;
/*
"https://upload.wikimedia.org/wikipedia/
            commons/thumb/a/a9/Amazon_logo.svg/
            1024px-Amazon_logo.svg.png"
*/