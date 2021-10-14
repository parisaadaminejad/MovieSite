import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fragment } from "react";
import MainRouter from "./router";
import "./App.css";
import { AuthProvider } from "./context/context";

function App() {
  return (
    <Fragment>
      <AuthProvider>
        <MainRouter />
      </AuthProvider>
    </Fragment>
  );
}

export default App;
