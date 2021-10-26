import { theme } from "../../component/theme";
import styled from "styled-components";

const Style = styled.div`
  margin: 20px 40px 0;
  padding: 20px 5px;

  .search {
    position: relative;
    input {
      width: 100%;
      padding: 10px 20px;
      border: solid 1px ${theme.gray};
      border-radius: 30px;
    }
    i {
      position: absolute;
      top: 13px;
      right: 15px;
      color: ${theme.orange};
    }
  }
  .search-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-y: scroll;
    max-height: 400px;
    background: ${theme.orange};
    .new-item {
      margin-right: 20px;
      .new-img {
        max-width: 100px;
        img {
          width: 100%;
          height: auto;
          border-radius: 10px;
        }
      }
      .new-box h5 {
        color: ${theme.graydrak};
      }
    }
  }
`;
export default Style;
