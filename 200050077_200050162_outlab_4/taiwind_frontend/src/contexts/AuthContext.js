import React from "react";
import { useContext, useState, useEffect } from "react";
import { userInfo } from "../components/auth-api";
const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}


export function AuthProvider(props){
    const [authUser , setAuthUser] = useState({});
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const checkLogin = async () => {
      try {
        const res = await userInfo();
        console.log("AuthContext : " ,res);  //Why does this thing give problem some times
        setIsLoggedIn(res.auth) ;
        if(isLoggedIn){
          setAuthUser(res.user);
        }
        else{
          setAuthUser(null);
        }
        console.log("AuthContext : Res", res)
        console.log("AuthContext : authUser", authUser);
        console.log("AuthContext : isLoggedIn", isLoggedIn);
      } catch (err) {
        console.log(err.message);
      }
    };
    useEffect(() => {
      checkLogin();
    }, []);
  

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }
    return (
        <AuthContext.Provider value = {value}>{props.children}</AuthContext.Provider>
    )

}