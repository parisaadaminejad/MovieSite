import { Fragment } from "react";

import { MD5 } from "../../../helper/md5";
import { useHistory } from "react-router-dom";
import { useAuthDispatch, useAuthState, logout } from "../../../context";
import Style from "./style";

const UserProfile = () => {
  const userDetails = useAuthState();
  const history = useHistory();
  const dispatch = useAuthDispatch();
  const handleLogOut = () => {
    logout(dispatch);
    history.push("/login");
  };
  return (
    <Style>
      <Fragment>
        <div className="background"></div>
        <div className="page-userprofile">
          <div className="userprofile-box">
            <div className="userprofile-image">
              <img
                src={`https://www.gravatar.com/avatar/${MD5(
                  userDetails.email
                )}`}
              />
            </div>
            <p className="userprofile-name">{userDetails.username}</p>
            <p className="userprofile-name">{userDetails.family}</p>
            <div className="userprofile-item">
              <p>email</p>
              <div className="userprofile-icon">
                <i className="fa fa-envelope"></i>
                <span>{userDetails.email}</span>
              </div>
              <p>nationalCode</p>
              <div className="userprofile-icon">
                <i className="fa fa-pencil-alt"></i>
                <span>{userDetails.nationalCode}</span>
              </div>
              <button onClick={handleLogOut}>logout</button>
            </div>
          </div>
        </div>
      </Fragment>
    </Style>
  );
};
export default UserProfile;
