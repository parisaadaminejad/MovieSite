const ROOT_URL = "https://6151e0434a5f22001701d506.mockapi.io/login";

export async function loginUser(dispatch, loginPayload) {
  const requestOptions = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: "REQUEST-LOGIN" });
    let response = await fetch(`${ROOT_URL}`, requestOptions);
    let data = await response.json();
    if (data.username) {
      dispatch({ type: "LOGIN-SUCCESS", payload: data });
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    }
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
    console.log(error);
  }
}
export function logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
}
