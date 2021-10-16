import { Fragment } from "react";
import { useAuthState } from "../../../context";
import { MD5 } from "../../../helper/md5";
const UserProfile = () => {
  const userDetails = useAuthState();
  return (
    <Fragment>
      <p>{userDetails.email}</p>
      <p>{userDetails.nationalCode}</p>
      <p>{userDetails.username}</p>
      <p>{userDetails.family}</p>
      <img src={`https://www.gravatar.com/avatar/${MD5(userDetails.email)}`} />
    </Fragment>
  );
};
export default UserProfile;
