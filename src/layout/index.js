import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";
import MobileHeader from "./header/mobileHeader";
const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <MobileHeader />
      {children}
      <Footer />
    </Fragment>
  );
};
export default Layout;
