import { theme } from "../../component/theme";
import styled from "styled-components";

const Style = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0 40px;
    justify-content: space-between;
    .new-item {
      .new-box h2 {
        color: ${theme.graylight};
        padding: 10px 0;
        font-size: 15px;
      }
      .btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* display: none; */
        z-index: 100;
        opacity: 0;
        transition: all 0.7s ease-out;
        color: white;
        border: 2px solid ${theme.white};
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
    .new-img {
      position: relative;
      width: 216px;
      img {
        width: 100%;
        height: auto;
        border-radius: 10px;
      }
      &::after {
        content: "";
        position: absolute;
        width: 0;
        background: ${theme.orangegray};
        top: 0;
        left: 0;
        height: 99%;
        z-index: 99;
        transition: all 0.5s ease-out;
        border-radius: 10px;
      }
    }
  }

  .new-title {
    position: relative;
    h2 {
      margin: 30px 40px 40px 40px;
      border-bottom: 1px solid ${theme.gray};
      padding: 0 0 20px 0;
      text-transform: uppercase;
      color: ${theme.orange};
    }
    &::after {
      content: "";
      position: absolute;
      top: 47px;
      left: 39px;
      display: block;
      width: 125px;
      height: 4px;
      background-image: linear-gradient(
        to right,
        ${theme.oranglight},
        ${theme.orange}
      );
      border-radius: 5px;
    }
  }
`;
export default Style;
