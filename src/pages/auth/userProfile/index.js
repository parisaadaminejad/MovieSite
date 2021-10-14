import { Fragment } from "react";
import { useAuthState } from "../../../context";
const UserProfile = () => {
  const userDetails = useAuthState();
  return (
    <Fragment>
      <p>{userDetails.email}</p>
      <p>{userDetails.nationalCode}</p>
      <p>{userDetails.username}</p>
      <p>{userDetails.family}</p>
    </Fragment>
  );
};
export default UserProfile;
