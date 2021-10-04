import { Link } from "react-router-dom";
import style from "./style";
const Header = () => {
    return(
        <header id='header'>
            
                <div className='heading'>
                    <button className='heading-btn'>login/register</button>
                </div>
                <div className='navbar'>
                    <div className='navbar-logo'>
                        <span className='logo'>m</span>
                        <span className='logo-text'>movie</span>
                    </div>
                    <div className='navbar-menu'>
                        <ul className='navbar-menu-list'>
                            <li className='navbar-menu-item'><Link >home</Link></li>
                            <li className='navbar-menu-item'><Link >news</Link></li>
                            <li className='navbar-menu-item'><Link >contact us</Link></li>
                        </ul>
                    </div>
                </div>
            
        </header>
    )
}
export default Header;