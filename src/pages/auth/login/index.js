import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Fragment } from "react";
import { useAuthDispatch, useAuthState, loginUser } from "../../../context";
import Style from "./style";

const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispath = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();
  const handelLogin = async (e) => {
    e.preventDefault();
    try {
      let response = await loginUser(dispath, { email, password });
      if (!response.username) return;
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <Style>
        <div className="page-login">
          <div className="login">
            <h2>login via email</h2>
            <p>please enter your email and password</p>
            <form>
              <div className="page-box">
                <input type="text" id="email" placeholder="username" />
              </div>
              <div className="page-box">
                <input type="password" id="password" placeholder="password" />
              </div>
              <div className="page-box">
                <button onClick={handelLogin} disabled={loading}>
                  login
                </button>
              </div>
            </form>
          </div>
        </div>
      </Style>
    </Fragment>
  );
};
export default Login;
