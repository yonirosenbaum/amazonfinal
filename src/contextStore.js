import React, { createContext, useContext, useReducer } from "react";


const StateContext = createContext();
const StateProvider = ({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

const UseStateValue = () => useContext(StateContext);

export{StateContext, StateProvider, UseStateValue};