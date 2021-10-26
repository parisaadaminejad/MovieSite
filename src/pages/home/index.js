import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../layout/header";
import Intro from "../../component/intro";
import { useAuthState } from "../../context";
import NewFilms from "../../component/newfilms";
import Search from "../../component/search";
import Popular from "../../component/popular";
import Footer from "../../layout/footer";

const Home = () => {
  const { search } = useLocation();

  const userDatails = useAuthState();
  console.log(userDatails.gravatar);

  return (
    <Fragment>
      <Header />
      <Intro />
      <Search />
      <NewFilms />

      <Popular />
    </Fragment>
  );
};
export default Home;
