import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import RoutesPath from './routes/Routes';
import React, { useState, useEffect } from 'react'
import AuthApi from "./utils/AuthApi"
import { check } from './components/auth-api';
import configureStore from './store/store';
import { Provider } from "react-redux";
import Navbar from './components/navbar/NavBar';

let preloadedState = {};
const store = configureStore(preloadedState);



function App() {
  // const [auth, setAuth] = useState(false);
  // const [user, setUser] = useState(null)

  // const readSession = async () => {
  //   const res = await check();
  //   console.log(res.message)
  //   if (res.auth) {
  //     setAuth(true);
  //   } else {
  //     setAuth(false);
  //   }
  // }
  // useEffect(() => {
  //   readSession();
  // }, [])

  return (<Navbar/>)
  
}

// {/* <Provider store={store}> */}
// {/* </Provider> */}
export default App;
