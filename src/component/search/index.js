import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { imgServerUrl, apiKey, baseUrl } from "../../constant";
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
        `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false&query=${query}`
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
  const RenderFarm = () => {
    return movies.map((item) => {
      const { id, original_title } = item;
      const imgUrl = `${imgServerUrl}${item.poster_path}`;
      return (
        <div className="new-item" key={id}>
          <Link to={`/details/${id}`}>
            <div className="new-box">
              <h5>{textDots(original_title, 8)}</h5>
              <div className="new-img">
                <img src={imgUrl} onError={defultImag} alt={original_title} />
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };
  function defultImag(e) {
    e.target.src = "/Unkown.jpg";
  }
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
      {movies.length > 0 && <div className="search-box">{RenderFarm()}</div>}
    </Style>
  );
};
export default Search;
