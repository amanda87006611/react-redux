import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducer from './reducers';

const store =createStore(allReducer);

// import { createStore } from 'redux'
// let store = createStore( )

// STORE


// ACTION Increment
// const increment =()=>{
//   return {
//     type:"INCREMENT"
//   }
// }
// const decrement =()=>{
//   return {
//     type:"DECREMENT"
//   }
// }
// REDUCER  (state transform a state into another)
// const counter = (state=0,action)=>{
//   switch(action.type){
//     case 'INCREMENT':
//       return state +1;
//     case 'DECREMENT':
//       return state -1; 
//   }
// }
 
// let store = createStore(counter);

// Display it in console
// store.subscribe(()=>console.log(store.getState()));

// DISPATCH
// store.dispatch(increment());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
