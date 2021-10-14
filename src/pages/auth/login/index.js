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
  const changeEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <Fragment>
      <form>
        <div>
          <label htmlFor="email">username</label>
          <input onChange={changeEmail} type="text" id="email" />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input onChange={changePassword} type="password" id="password" />
        </div>
      </form>
      <button onClick={handelLogin} disabled={loading}>
        login
      </button>
    </Fragment>
  );
};
export default Login;
