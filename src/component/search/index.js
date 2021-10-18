import { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { imgServerUrl, apiKey } from "../../constant";
import textDots from "../../helper";
import Style from "./style";

const Search = () => {
  const [query, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (query.length < 3) {
      setMovies([]);
    }
    if (query.length >= 3) {
      setLoading(true);

      fetch(
        `https://murmuring-tundra-31743.herokuapp.com/movies/3/search/multi?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setLoading(false);
          setMovies(data.results);
          console.log(data, "data");
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, [query]);
  const changeEvent = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  const RenderForm = () => {
    const noImage = "Unkown.jpg";
    const temp = movies.slice(0, 4);
    return temp.map((item) => {
      const { id, original_title, poster_path } = item;
      const imgUrl = `${imgServerUrl}${item.poster_path}`;
      const checkImage =
        item.hasOwnProperty("poster_path") && poster_path !== null
          ? imgUrl
          : noImage;
      return (
        <Fragment>
          <li className="new-item" key={id}>
            <Link to={`/details/${id}`}>
              <div className="new-box">
                <div className="new-img">
                  <img src={imgUrl} alt={original_title} />
                </div>
                <h2>{textDots(original_title, 10)}</h2>
                <div className="logo">
                  <img src={checkImage} alt={item.original_title} />
                </div>
              </div>
            </Link>
          </li>
        </Fragment>
      );
    });
  };
  return (
    <Style>
      <div className="search">
        <input
          type="text"
          placeholder="type to search"
          onChange={changeEvent}
        />
        <i className="fa fa-search"></i>
      </div>
      <ul>{RenderForm()}</ul>
    </Style>
  );
};
export default Search;
