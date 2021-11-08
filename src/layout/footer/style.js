import styled from "styled-components";
import { theme } from "../../component/theme";

const Style = styled.div`
  .footer {
    background: ${theme.black};

    padding: 30px 0;
    .footer-social {
      border-bottom: 1px solid ${theme.graydrak};
      margin: 0 20px;
      ul {
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        a {
          display: block;
          padding: 20px;
          color: ${theme.gray};
          transition: all 0.5 ease;
          &:hover {
            transform: scale(2, 2);
            color: ${theme.orange};
          }
        }
      }
    }
    .footer-text {
      color: ${theme.orange};
      text-align: center;
      padding: 20px 0;
    }
  }
`;
export default Style;
