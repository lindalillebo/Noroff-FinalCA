import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Login from "../login/Login";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import CardDetail from "../cards/detail/CardDetail";

export default function Layout() {
  const [toggle, setToggle] = useState(false);
  const [isDesktopSize, setDesktopSize] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 710px)");
    mediaQuery.addListener(handleChange);
    handleChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, []);

  const handleChange = mediaQuery => {
    if (mediaQuery.matches) {
      setDesktopSize(true);
    } else {
      setDesktopSize(false);
    }
  };

  const toggleNav = () => {
    setToggle(!toggle);
  };

  return (
    <Router>
      <header>
        <Link to="/" className="nav-link">
          <h1>Card Game</h1>
        </Link>
        <CSSTransition
          in={isDesktopSize || toggle}
          timeout={0}
          unmountOnExit
        >
          <nav>
            <ul>
              <li>
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                  Contact us
                </Link>
              </li>
            </ul>
          </nav>
        </CSSTransition>
        <button onClick={toggleNav}>&#9776;</button>
      </header>
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/card/:id" component={CardDetail} />
        </Switch>
      </div>
    </Router>
  );
}
