import logo from "./logo.svg";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fragment } from "react";
import MainRouter from "./router";
import "./App.css";
import Intro from "./layout/intro";

function App() {
  return (
    <Fragment>
      <MainRouter />
    </Fragment>
  );
}

export default App;
