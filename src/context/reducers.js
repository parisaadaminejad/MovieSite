let userName = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).username
  : "";
let email = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).email
  : "";
let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : "";
let nationalCode = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).national_code
  : "";
let gravatar = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).gravatar
  : "";
let family = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).family
  : "";
export const initialState = {
  username: "" || userName,
  email: "" || email,
  family: "" || family,
  token: "" || token,
  nationalCode: nationalCode,
  gravatar: gravatar,
  errorMessage: null,
};
export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST-LOGIN":
      return {
        ...initialState,
      };
    case "LOGIN-SUCCESS":
      return {
        ...initialState,
        email: action.payload.email,
        userName: action.payload.userName,
        family: action.payload.family,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...initialState,
        userName: "",
        family: "",
        email: "",
        token: "",
      };
    case "LOGIN_ERROR":
      return {
        ...initialState,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
