import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "../../context";

import Style from "./style";

const Header = () => {
  const userDetails = useAuthState();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 130);
    });
  }, []);
  function handleLoginButton() {
    if (!userDetails.token) {
      return <Link to={`/login/`}>login</Link>;
    } else {
      return <Link to={`/userProfile/`}>profile</Link>;
    }
  }

  return (
    <Fragment>
      <Style>
        <div id="header" className={scroll ? "scroll" : ""}>
          <div className="header-wrap">
            <div className="header-top">
              <button className="header-btn">{handleLoginButton()}</button>
            </div>

            <div className="navbar">
              <div className="navbar-logo">
                <span className="logo">m</span>
                <span className="logo-text">movie</span>
              </div>
              <div className="navbar-menu">
                <ul className="navbar-menu-list">
                  <li className="navbar-menu-item">
                    <Link className="active" to={"/"}>
                      home
                    </Link>
                  </li>
                  <li className="navbar-menu-item">
                    <a href="#news">new</a>
                  </li>
                  <li className="navbar-menu-item">
                    <a href="#popular">popular</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Style>
    </Fragment>
  );
};
export default Header;
