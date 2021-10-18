import styled from "styled-components";
const theme = {
  gray: "#aca9a9",
  orange: "#ec7532",
  white: "#ffffff",
  black: "#222327",
  darkgrey: "rgb(55, 56, 62)",
};
const Style = styled.div`
  .page-userprofile {
    position: relative;
    min-height: 100vh;
    width: 100vw;
    background: ${theme.black} black;
    background-image: radial-gradient(at bottom, #ec7532, #121212 70%);
    & .userprofile-box {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      background: aqua;
      border-radius: 10px;
      & button {
        width: 100%;
        line-height: 52px;
        border-radius: 5px;
        border: none;
        /* padding: 0 16px; */
        /* margin-bottom: 28px; */
        margin: 10px 10px 10px 10px;
        color: ${theme.white};
        background: ${theme.orange};
      }
      & .userprofile-image {
        text-align: center;
        margin: 10px 0;
        & img {
          border-radius: 20px;
        }
      }
      & p {
        text-align: center;
      }
    }
    & .userprofile-item {
      background: blue;
      border-radius: 7px;
      margin: 10px;
      & p {
        text-transform: uppercase;
        padding: 10px;
      }
      & .userprofile-icon {
        padding: 5px 10px;
      }
    }
  }
`;
export default Style;
