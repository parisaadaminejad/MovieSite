import { imgServerUrl, apiKey, baseUrl } from "../../constant";
import { Fragment, useEffect, useState } from "react";
import textDots from "../../helper";
import Style from "./style";
import { Link } from "react-router-dom";

const Popular = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const RenderForm = () => {
    const temp = movies.slice(0, 5);
    return temp.map((item) => {
      const { id, original_title } = item;
      const imgUrl = `${imgServerUrl}${item.poster_path}`;

      return (
        <Fragment>
          <li className="new-item" key={id}>
            <Link to={`/details/${id}`}>
              <div className="btn">
                <i className="fa fa-play"></i>
              </div>
              <div className="new-box">
                <div className="new-img">
                  <img src={imgUrl} alt={original_title} />
                </div>
                <h2>{textDots(original_title, 10)}</h2>
              </div>
            </Link>
          </li>
        </Fragment>
      );
    });
  };
  return (
    <Style>
      <div className="new-title" id="popular">
        <h2>popular</h2>
      </div>
      <ul>{RenderForm()}</ul>
    </Style>
  );
};
export default Popular;
