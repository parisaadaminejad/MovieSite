import { theme } from "../../../component/theme";
import styled from "styled-components";
const HeaderStyle = styled.div`
  background: ${theme.black};
  .mobile-header {
    margin: 0 20px;
    padding-top: 20px;
    & .mobile-header-logo {
      text-transform: uppercase;
      & span {
        font-size: 30px;
      }
      & .logo-item {
        font-size: 30px;
        color: ${theme.orange};
        padding-right: 20px;
      }
    }
    & .mobile-header-rightside {
      & ul {
        display: flex;
        & li {
          padding: 10px 20px;
          & .header-btn {
            border-radius: 20px;

            padding: 6px 15px;
            font-size: 15px;
            border: 1px solid;
          }
          & a {
            i {
              color: ${theme.white};
              font-size: 30px;
            }
            span {
              color: ${theme.white};
              font-size: 30px;
              display: none;
            }
          }
        }
      }
    }
  }
  .mobile-background {
    position: fixed;
    width: 100wv;
    width: 100vw;
    height: 100vh;
    background: ${theme.black};
    opacity: 0.8;
    z-index: 400;
    display: none;

    & ul {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-top: 80px;
      .navbar-menu-item {
        margin-bottom: 20px;
        font-size: 30px;
        a {
          color: ${theme.white};
          &:hover {
            transform: scale(1.2);
            color: ${theme.orange};
          }
        }
      }
    }
  }
  @media (max-width: 1440px) {
    .mobile-header {
      display: none;
    }
  }
  @media (max-width: 992px) {
    .mobile-header {
      display: flex;
      justify-content: space-between;

      & .mobile-header-logo {
        .logo {
          font-size: 20px;
          margin-right: 30px;
          color: ${theme.orange};
        }
        .logo-text {
          letter-spacing: 3px;
          color: ${theme.white};
        }
      }
    }
    #header {
      display: none;
    }
  }
`;
export default HeaderStyle;
