import React from "react" ;
import { useAuth } from "../contexts/AuthContext";
export default function DashBoard(){
    const  {
        authUser,
        setAuthUSer,
        isLoggedIn,
        setIsLoggedIn
    } = useAuth() ;
    const logIn = (e)=>{
        e.preventDefault();
        setIsLoggedIn(true);
        setAuthUSer({
            name : "Kajal"
        })
    }
    const logOut = (e)=>{
        e.preventDefault();
        setIsLoggedIn(false);
        setAuthUSer(null);
    }
    return(
        <>
        {/* <spam>use is {isLoggedIn ? "LoggedIn" : "LoggedOut"}</spam> */}
        { isLoggedIn ?
        <button onClick={(e)=>{logOut(e)}}>LogOut</button>
        :
        <button onClick={(e)=>{logIn(e)}}>LogIn</button>
}
        </>
    );
}