import { imgServerUrl, apiKey, getNewfilm } from "../../constant";
import { Fragment, useEffect, useState } from "react";
import textDots from "../../helper";
import { Link } from "react-router-dom";
import Style from "./style";

const NewFilms = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${getNewfilm}?api_key=${apiKey}&language=en-US&page=1`)
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
      const { id, original_title, poster_path } = item;
      const imgUrl = `${imgServerUrl}${poster_path}`;

      return (
        <Fragment>
          <li className="new-item" key={id}>
            <Link to={`/details/${id}`}>
              <div className="new-box">
                <div className="new-img">
                  <img src={imgUrl} alt={original_title} />
                  <div className="btn">
                    <i className="fa fa-play"></i>
                  </div>
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
      <div className="new-title" id="news">
        <h2>new in</h2>
      </div>
      <ul>{RenderForm()}</ul>
    </Style>
  );
};
export default NewFilms;
