import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fragment } from "react";
import MainRouter from "./router";
import { AuthProvider } from "./context/context";
import "./App.css";

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
