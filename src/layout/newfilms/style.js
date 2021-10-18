import styled from "styled-components";
const theme = {
  orange: "#ec7532",
  gray: "#d8d8d8",
  darkgray: "#938e8e",
};
const Style = styled.div`
  .new-item {
    margin-right: 20px;
    position: relative;
    & .new-box h2 {
      color: ${theme.darkgray};
    }
    & .btn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      /* display: none; */
      z-index: 100;
      opacity: 0;
      transition: all 0.7s ease-out;
      color: white;
      border: 2px solid #ffffff;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      & i {
        position: absolute;
        top: 40%;
        left: 40%;
      }
    }
    &:hover {
      .new-img:after {
        width: 100%;
      }
      .btn {
        opacity: 1;
        /* display: block; */
      }
    }
  }
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
      bottom: -84px;
      left: 39px;
      display: block;
      width: 125px;
      height: 4px;
      background-image: linear-gradient(to right, #fbbd61, #ec7532);
      border-radius: 5px;
    }
  }
  .new-img {
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
      background: #dc603085;
      top: 0;
      left: 0;
      height: 99%;
      z-index: 99;
      transition: all 0.5s ease-out;
      border-radius: 10px;
    }
  }

  ul {
    display: flex;
    margin: 0 40px;
  }
`;
export default Style;
