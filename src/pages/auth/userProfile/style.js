import { theme } from "../../../component/theme";
import styled from "styled-components";

const Style = styled.div`
  .page-userprofile {
    display: flex;
    justify-content: center;
    background: ${theme.black};
    background-image: radial-gradient(
      at bottom,
      ${theme.orange},
      ${theme.oranggray} 70%
    );
    .userprofile-box {
      margin-top: 150px;
      margin-bottom: 30px;
      width: 400px;
      background: ${theme.darkgrey};
      border-radius: 10px;
      .userprofile-image {
        text-align: center;
        margin-top: 10px;
        img {
          border-radius: 15px;
        }
      }
      .userprofile-name {
        color: ${theme.white};
        padding: 10px 0;
        text-align: center;
      }
      .userprofile-item {
        background: ${theme.blackgrey};
        color: ${theme.white};
        border-radius: 7px;
        margin: 10px;
        p {
          text-transform: uppercase;
          padding: 15px 40px;
        }
        .userprofile-icon {
          padding: 5px 10px;
          span {
            margin: 0 15px;
          }
        }
        button {
          width: 100%;
          line-height: 52px;
          border-radius: 5px;
          border: none;
          margin-top: 15px;
          color: ${theme.white};
          background: ${theme.orange};
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`;
export default Style;
