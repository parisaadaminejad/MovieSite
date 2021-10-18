import { Fragment } from "react";
import { Link, useLocation, useHistory, useParams } from "react-router-dom";
import Header from "../../layout/header";
import Intro from "../../layout/intro";
import { useAuthDispatch, useAuthState, logout } from "../../context";
import NewFilms from "../../layout/newfilms";
import Search from "../../component/search";
import Popular from "../../layout/popular";

const Home = () => {
  const { search } = useLocation();

  const userDatails = useAuthState();
  console.log(userDatails.gravatar);

  // const changeButton = () => {
  //   if (userDatails.userName) {
  //     return <button onClick={handleLogOut}>logout</button>;
  //   } else {
  //     return <button onClick={handleLogOut}>login</button>;
  //   }
  // };
  return (
    <Fragment>
      {/* {changeButton()} */}
      <Header />
      <Intro />
      <NewFilms />
      <Search />
      <Popular />
    </Fragment>
  );
};
export default Home;
