import { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from '../../layout/header';
import Style from "../../layout/header/style";

const Home = () => {
    return(
      <Style>
       {/* <p>Home</p> */}
       <Header/>
        {/* <Link to='/login'>Go to lagin</Link> */}
      </Style>
        
    )
}
export default Home;