import Style from "./style";
const Footer = () => {
  return (
    <Style>
      <footer className="footer">
        <div className="footer-social">
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-text">
          <small>@2021 Movies</small>
        </div>
      </footer>
    </Style>
  );
};
export default Footer;
