import React, { useState, useEffect} from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { check } from '../auth-api';
import { NavLink } from "react-router-dom";
import AuthApi from "../../utils/AuthApi"
import { BrowserRouter as Router, Route } from "react-router-dom"
import RoutesPath from '../../routes/Routes';
import { logout } from "../auth-api";

const Nav = () => {

  const [auth, setAuth] = useState(false);
  // const [user, setUser] = useState(null)

  const readSession = async () => {
    const res = await check();
    console.log(res.message)
    if (res.auth) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }
  useEffect(() => {
    readSession();
    // console.log("cnjsnck\n\n" + auth + "\n\nsjkbakjckjasckjasc")
  }, [])

  const handleSignout = async (e) => {
    e.preventDefault();
    const res = await logout()
    setAuth(false);
  };


  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <AuthApi.Provider value={{ auth, setAuth }}>
        <Router>
          <nav className="main-nav">
            {/* 1st logo part  */}
            <div className="logo">
              <h2>
                <span>Y</span>ash
                <span>V</span>ardhan
              </h2>
            </div>

            {/* 2nd menu part  */}
            <div
              className={
                showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
              }>
              <ul>
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/course/running">Courses</NavLink>
                </li>
                <li>
                  <NavLink to="/registration">Registration</NavLink>
                </li>
                <li>
                  <NavLink to="/instructor">Instructor</NavLink>
                </li>
                <li>
                  <NavLink to="#" onClick={handleSignout}>Logout</NavLink>
                </li>
              </ul>
            </div>

            {/* 3rd social media links */}
            <div className="social-media">
              <ul className="social-media-desktop">
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_yash">
                    <FaFacebookSquare className="facebook" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_yash">
                    <FaInstagramSquare className="instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_yash">
                    <FaYoutubeSquare className="youtube" />
                  </a>
                </li>
              </ul>

              {/* hamburget menu start  */}
              <div className="hamburger-menu">
                <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                  <GiHamburgerMenu />
                </a>
              </div>
            </div>
          </nav>

          <section className="hero-section">
          {/* <Container type='flex' alignItems='center'> */}
            {/* <div className="App"> */}
            <RoutesPath />

            {/* 
            <p>Welcome to </p>
            <h1>Thapa Technical</h1> */}
          {/* </Container> */}
          </section>

        </Router>
      </AuthApi.Provider>
    </>
  );
};

export default Nav;