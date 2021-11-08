import { lazy, Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Loader from "../component/loader";
import { PublicRoute, PriveteRoute } from "./config";
import isLoggedin from "../helper/isLoggedin";
import Layout from "../layout";
const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/auth/login"));
const UserProfile = lazy(() => import("../pages/auth/userProfile"));
const Details = lazy(() => import("../pages/details"));
const NotFound = lazy(() => import("../pages/notFound"));

const MainRouter = () => {
  const isAuthenticated = isLoggedin();
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Switch>
            <PublicRoute path="/" exact isAuthenticated={isAuthenticated}>
              <Home />
            </PublicRoute>
            <PublicRoute
              path="/login"
              exact
              restricted={true}
              isAuthenticated={isAuthenticated}
            >
              <Login />
            </PublicRoute>

            <PublicRoute
              path="/details/:id"
              exact
              isAuthenticated={isAuthenticated}
            >
              <Details />
            </PublicRoute>
            <PriveteRoute
              path="/userProfile"
              exact
              isAuthenticated={isAuthenticated}
            >
              <UserProfile />
            </PriveteRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};
export default MainRouter;
