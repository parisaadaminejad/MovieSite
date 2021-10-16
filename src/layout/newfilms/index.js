import { imgServerUrl, apiKey } from "../../constant";
import { Fragment, useEffect, useState } from "react";
import textDots from "../../helper";
import Style from "./style";

const NewFilms = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    )
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
    const temp = movies.slice(0, 3);
    return temp.map((item) => {
      console.log(item, "New");
      const { id, original_title } = item;
      const imgUrl = `${imgServerUrl}${item.poster_path}`;

      return (
        <Fragment>
          <div className="item" key={id}>
            <div>
              <h1>new in</h1>
            </div>
            <div className="box">
              <div className="box-img">
                <img src={imgUrl} alt={original_title} />
              </div>
              <h2>{textDots(original_title, 10)}</h2>
            </div>
          </div>
        </Fragment>
      );
    });
  };
  return (
    <Style>
      <div>{RenderForm()}</div>
    </Style>
  );
};
export default NewFilms;
