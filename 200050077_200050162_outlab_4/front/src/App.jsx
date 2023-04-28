// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Route } from "react-router-dom"
// import RoutesPath from './routes/Routes';
// import React, { useState, useEffect } from 'react'
// import AuthApi from "./utils/AuthApi"
// import { check } from './components/auth-api';
// import configureStore from './store/store';
// import { Provider } from "react-redux";
import Refunds from "./components/navbar";
import UserInfo from "./components/userInfo";

// let preloadedState = {};
// const store = configureStore(preloadedState);


export default function App() {
  return (
    <div>
      {/* <Refunds /> */}
      <UserInfo />
    </div>
  );
}
