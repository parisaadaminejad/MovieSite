const isloggedIn = () => {
  let token = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).token
    : "";
  if (token) {
    return true;
  } else {
    return false;
  }
};
export default isloggedIn;
