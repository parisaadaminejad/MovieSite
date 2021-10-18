import styled from "styled-components";
const theme = {
  orange: "#ec7532",
  gray: "#d8d8d8",
  darkgray: "#938e8e",
};
const Style = styled.div`
  .new-title {
    & h2 {
      position: relative;
      margin: 30px 40px 40px 40px;
      border-bottom: 1px solid ${theme.gray};
      padding: 0 0 20px 0;
      text-transform: uppercase;
      color: ${theme.orange};
    }
    &::after {
      content: "";
      position: absolute;
      /* bottom: -84px; */
      left: 39px;
      display: block;
      width: 125px;
      height: 4px;
      background-image: linear-gradient(to right, #fbbd61, #ec7532);
      border-radius: 5px;
      z-index: 100;
    }
  }
  .new-box {
    padding-right: 30px;
    & .new-img {
      position: relative;
      width: 200px;
      & img {
        width: 100%;
        height: auto;
        border-radius: 10px;
      }
      &::after {
        content: "";
        position: absolute;
        width: 0;
        background: red;
        top: 0;
        left: 0;
        height: 100%;
        z-index: 99;
        transition: all 0.5s ease-out;
      }
    }
    & h2 {
      color: #938e8e;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0 40px;
  }
`;
export default Style;
