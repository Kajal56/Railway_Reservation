import React from "react";
import { connect } from "react-redux";
// import { Redirect, Route,  } from "react-router-dom";
import { Route, Navigate, withRouter } from 'react-router-dom';

const mapStateToProps = ({ session: {userId} }) => ({
  loggedIn: Boolean(userId)
});

const Auth = ({loggedIn, path, element: Element }) => (
    <Route 
      path={path} element={
        loggedIn ? <Navigate replace to={"/home"}/> : (Element)
      } />
);
const Protected = ({ loggedIn, path, element: Element }) => (
  <Route 
  path={path} element={
    loggedIn ? ( Element ) : <Navigate replace to={"/login"} />
  } />
);

export const AuthRoute = connect(mapStateToProps)(Auth)
export const ProtectedRoute = connect(mapStateToProps)(Protected)

// export const AuthRoute = withRouter(
//   connect(mapStateToProps)(Auth)
// );
// export const ProtectedRoute = withRouter(
//   connect(mapStateToProps)(Protected)
// );
