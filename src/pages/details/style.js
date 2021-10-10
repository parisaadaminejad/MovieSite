import styled from "styled-components";

const Style = styled.div`
  .detail {
    overflow: hidden;
    height: 100vh;
    max-height: 900px;
    & .detail-img {
      img {
        width: 100%;
        background-position: center;
        background-size: cover;
        height: auto;
      }
    }
  }
`;
export default Style;
