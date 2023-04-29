import React from "react";
import { useContext, useState, useEffect } from "react";
import { userInfo } from "../components/auth-api";
const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}


export function AuthProvider(props){
    const [authUser , setAuthUSer] = useState("Kajal");
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const checkLogin = async (train) => {
      try {
        const res = await userInfo();
        setIsLoggedIn(res.auth) ;
        console.log(res);
      } catch (err) {
        console.log(err.message);
      }
    };
    useEffect(() => {
      checkLogin();
    }, []);
  

    const value = {
        authUser,
        setAuthUSer,
        isLoggedIn,
        setIsLoggedIn
    }
    return (
        <AuthContext.Provider value = {value}>{props.children}</AuthContext.Provider>
    )

}