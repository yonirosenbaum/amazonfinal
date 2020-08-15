import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Reducer, InitialState} from './reducer';
import { StateProvider } from './contextStore';


ReactDOM.render( 
<StateProvider initialState={InitialState} reducer={Reducer}>
<App/>
</StateProvider>
,
document.getElementById('root'));