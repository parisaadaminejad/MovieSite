import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import get from "lodash/get";
import { imgServerUrl, getTrend, apiKey } from "../../constant";
import { useEffect, useState } from "react";
import textDots from "../../helper";
import Style from "./style";

const Intro = (props) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${getTrend}?api_key=${apiKey}`)
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
    // const result = get(movies, "results", []);
    const temp = movies.slice(0, 6);
    return temp.map((item) => {
      console.log(item, "ytr");
      const { id, original_title, overview, name } = item;
      const imgUrl = `${imgServerUrl}${item.backdrop_path}`;

      return (
        <div className="slider-item" key={id}>
          <div
            className="slider-box"
            style={{
              backgroundImage: `url(${imgUrl})`,
            }}
          >
            <div className="slider-container">
              <div className="slider-title">
                <span>{name}</span>
                <h1>{textDots(original_title, 10)}</h1>
                <p>{textDots(overview, 20)}</p>
                <div className="slider-btn">
                  <Link className="slider-link" to={`/details/${id}`}>
                    <i className="fa fa-play"></i>
                    <span>details</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Style>
      <div>
        <Slider {...settings} className="slider">
          {RenderForm()}
        </Slider>
      </div>
    </Style>
  );
};
export default Intro;
