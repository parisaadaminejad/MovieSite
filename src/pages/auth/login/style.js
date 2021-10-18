import styled from "styled-components";

const theme = {
  gray: "#aca9a9",
  orange: "#ec7532",
  white: "#ffffff",
  black: "#222327",
  darkgrey: "rgb(55, 56, 62)",
};
const Style = styled.div`
  .page-login {
    position: relative;
    background: ${theme.black};
    min-height: 100vh;
    width: 100vw;
    background-image: radial-gradient(at bottom, #ec7532, #121212 70%);

    & .login {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      background: ${theme.black};
      box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
      border-radius: 10px;
      & h2 {
        color: ${theme.white};
        margin: 10px 0 14px 30px;
        font-weight: 700;
        line-height: 1.75;
        text-transform: uppercase;
        font-size: 20px;
      }
      & p {
        color: ${theme.gray};
        font-size: 15px;
        font-weight: 400;
        line-height: 1.75;
        margin-bottom: 28px;
        margin-left: 30px;
      }
    }
  }
  .page-box {
    margin: 15px 30px;
    font-size: 16px;
    line-height: 52px;

    & input {
      width: 100%;
      line-height: 52px;
      border-radius: 5px;
      border: none;
      padding: 0 16px;
      margin-bottom: 28px;
      background-color: ${theme.darkgrey};
    }
    & button {
      width: 100%;
      line-height: 52px;
      border-radius: 5px;
      border: none;
      padding: 0 16px;
      margin-bottom: 28px;
      color: ${theme.white};
      background: ${theme.orange};

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
export default Style;
