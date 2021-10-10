import { lazy, Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Loader from "../component/loader";

const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/auth/login"));
const UserProfile = lazy(() => import("../pages/auth/userProfile"));
const Details = lazy(() => import("../pages/details"));

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/userProfile" exact>
            <UserProfile />
          </Route>
          <Route path="/details/:id" exact>
            <Details />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
export default MainRouter;
