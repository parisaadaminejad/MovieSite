import styled from "styled-components";

const theme = {
  orange: "#ec7532",
  gray: "#d8d8d8",
  darkgray: "#938e8e",
};
const Style = styled.div`
  .search {
    position: relative;
    margin: 20px 40px;
    padding: 20px;
    & input {
      width: 100%;
      padding: 10px 20px;
      border: solid 1px #d8d8d8;
      border-radius: 30px;
    }
    & i {
      position: absolute;
      top: 32px;
      right: 33px;
      color: ${theme.orange};
    }
  }
  .new-item {
    margin-right: 20px;
    & .new-img {
      width: 200px;
      & img {
        width: 100%;
        height: auto;
        border-radius: 10px;
      }
    }
    & .new-box h2 {
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
