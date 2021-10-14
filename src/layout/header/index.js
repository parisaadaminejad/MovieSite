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
    <Style>
      <header id="header" className={scroll ? "scroll" : ""}>
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
                  <Link className="active">home</Link>
                </li>
                <li className="navbar-menu-item">
                  <Link>news</Link>
                </li>
                <li className="navbar-menu-item">
                  <Link>contact us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </Style>
  );
};
export default Header;
