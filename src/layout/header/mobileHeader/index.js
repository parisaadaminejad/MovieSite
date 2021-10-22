import { Link } from "react-router-dom";
import { useAuthState } from "../../../context";
import HeaderStyle from "./style";

const MobileHeader = () => {
  const userDetails = useAuthState();
  function handleLoginButton() {
    if (!userDetails.token) {
      return <Link to={`/login/`}>login</Link>;
    } else {
      return <Link to={`/userProfile/`}>profile</Link>;
    }
  }
  const handelmenu = () => {
    const mobilemenu = document.querySelector(".mobile-background");
    const closeMenu = document.querySelector(".close");
    const menuBar = document.querySelector(".menubar");
    mobilemenu.style.display = "block";
    closeMenu.style.display = "block";
    menuBar.style.display = "none";
  };
  const handelclose = () => {
    const mobilemenu = document.querySelector(".mobile-background");
    const closeMenu = document.querySelector(".close");
    const menuBar = document.querySelector(".menubar");
    mobilemenu.style.display = "none";
    closeMenu.style.display = "none";
    menuBar.style.display = "block";
  };
  return (
    <HeaderStyle>
      <div className="mobile-header">
        <div className="mobile-header-logo">
          <span className="logo-item">m</span>
          <span className="logo-text">movie</span>
        </div>
        <div className="mobile-header-rightside">
          <ul>
            <li>
              <button className="header-btn">{handleLoginButton()}</button>
            </li>
            <li>
              <a>
                <i className="fas fa-bars menubar" onClick={handelmenu}></i>
                <span className="close" onClick={handelclose}>
                  X
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mobile-background" onClick={handelclose}>
        <div className="navbar-menu">
          <ul className="navbar-menu-list">
            <li className="navbar-menu-item">
              <Link className="active" to={"/"}>
                home
              </Link>
            </li>
            <li className="navbar-menu-item">
              <a href="#news">news</a>
            </li>
            <li className="navbar-menu-item">
              <a href="#popular">popular</a>
            </li>
          </ul>
        </div>
      </div>
    </HeaderStyle>
  );
};
export default MobileHeader;
