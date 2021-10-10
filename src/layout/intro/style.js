import styled from "styled-components";

const theme = {
  gray: "#aca9a9",
  orange: "#ec7532",
  white: "#ffffff",
  black: "#000000",
};

const Style = styled.div`
  .slider {
    overflow: hidden;
    & .slider-container {
      margin: 0 40px;
    }

    &-box {
      background-position: center;
      background-size: cover;
      height: 100%;
    }

    .slick-next {
      background: green;
      /* right: 70px; */
    }
    .slick-prev {
      background: green;
      /* left: 70px; */
    }
    .slick-dots {
      bottom: 15px;
    }

    .slider-item {
      position: relative;
      width: 100%;
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
      & .slider-title {
        position: absolute;
        top: 200px;
        z-index: 10;
        width: 40%;
        span {
          text-transform: uppercase;
          color: ${theme.orange};
          font-size: 30px;
          letter-spacing: 2px;
        }
        h1 {
          font-size: 52px;
          letter-spacing: 4px;
          color: ${theme.white};
          text-transform: capitalize;
        }
        p {
          color: ${theme.white};
          letter-spacing: 2px;
          line-height: 2;
          margin-top: 10px;
        }
        & .slider-btn {
          display: flex;
          margin-top: 25px;

          .slider-link {
            border: 1px solid ${theme.white};
            border-radius: 30px;
            border: 1px solid ${theme.orange};
            text-transform: uppercase;
            color: ${theme.white};
            padding: 12px 20px;
            background: ${theme.orange};
            & span {
              letter-spacing: 4px;
              color: ${theme.white};
              padding-left: 10px;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
`;
export default Style;
