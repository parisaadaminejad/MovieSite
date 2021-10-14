import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { apiKey } from "../../constant";
import { imgServerUrl } from "../../constant";
import Header from "../../layout/header";
import Style from "./style";

const Details = (props) => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setDetails(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const renderFarm = () => {
    const { id, original_title, overview, name, vote_average } = details;
    const imgUrl = `${imgServerUrl}${details.poster_path}`;

    return (
      <Fragment>
        <div className="detail" key={id}>
          <div className="detail-img">
            <img src={imgUrl} alt={name} />
          </div>
        </div>
        <div className="detail-title">
          <h1>{original_title}</h1>

          <p>{overview}</p>
          <p>vote_avrege:{` ${Math.ceil(vote_average)}`}</p>
        </div>
      </Fragment>
    );
  };

  return (
    <Style>
      {renderFarm()}
      <Header />
    </Style>
  );
};
export default Details;
