import styled from "styled-components";

const theme = {
  orange: "#ec7532",
  white: "#ffffff",
};
const Style = styled.div`
  .detail {
    position: relative;
    overflow: hidden;
    height: 100vh;
    max-height: 900px;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(
        to bottom,
        rgb(0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 100%
      );
    }

    & .detail-img {
      img {
        width: 100%;
        background-position: center;
        background-size: cover;
        height: auto;
      }
    }
  }
  .detail-title {
    position: absolute;
    bottom: 100px;
    top: 118px;
    left: 95px;
    width: 40%;
    padding: 10px;
    background: black;
    opacity: 0.7;
    box-shadow: 1px 1px 1px #000000;
    & h1 {
      color: ${theme.orange};
    }
    & p {
      color: ${theme.white};
      margin-top: 10px;
      letter-spacing: 2px;
      line-height: 2;
    }
  }
`;
export default Style;
