import React from "react";
import { useContext, useState, useEffect } from "react";
const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}


export function AuthProvider(props){
    const [authUser , setAuthUSer] = useState("Kajal");
    const [isLoggedIn , setIsLoggedIn] = useState(true);

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