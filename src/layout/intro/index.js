import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Style from "./style";



const Intro = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
<Style>

<Slider {...settings}  className='slider'>
        
        <div className='slider-item'>

          <div className='container'>
            <div className='slider-title'>
                <span>action,adventure,comedy</span>
                <h1>up in smoke : the remake</h1>
                <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est <br/> notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas <br/> humanitatis per seacula quarta decima et quinta decima.</p>
                <div className='slider-btn'>
                  <span className='circle'>pg-13</span>
                  <Link className='slider-link'>
                    <i className='fa fa-play'></i>
                    <span>play trailer</span>
                  </Link>
                </div>
            </div>
          </div>
           
          </div>
          <div className='slider-item'>
             
          <div className='container'>
            <div className='slider-title'>
                <span>action,adventure,comedy</span>
                <h1>up in smoke : the remake</h1>
                <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est <br/> notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas <br/> humanitatis per seacula quarta decima et quinta decima.</p>
                <div className='slider-btn'>
                  <span className='circle'>pg-13</span>
                  <Link className='slider-link'>
                    <i className='fa fa-play'></i>
                    <span>play trailer</span>
                  </Link>
                </div>
            </div>
          </div>
          </div>
          <div className='slider-item'>
            
          <div className='container'>
            <div className='slider-title'>
                <span>action,adventure,comedy</span>
                <h1>up in smoke : the remake</h1>
                <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est <br/> notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas <br/> humanitatis per seacula quarta decima et quinta decima.</p>
                <div className='slider-btn'>
                  <span className='circle'>pg-13</span>
                  <Link className='slider-link'>
                    <i className='fa fa-play'></i>
                    <span>play trailer</span>
                  </Link>
                </div>
            </div>
          </div>
          </div>
          <div className='slider-item'>
             
          <div className='container'>
            <div className='slider-title'>
                <span>action,adventure,comedy</span>
                <h1>up in smoke : the remake</h1>
                <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est <br/> notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas <br/> humanitatis per seacula quarta decima et quinta decima.</p>
                <div className='slider-btn'>
                  <span className='circle'>pg-13</span>
                  <Link className='slider-link'>
                    <i className='fa fa-play'></i>
                    <span>play trailer</span>
                  </Link>
                </div>
            </div>
          </div>
          </div>
          <div className='slider-item'>
             
          <div className='container'>
            <div className='slider-title'>
                <span>action,adventure,comedy</span>
                <h1>up in smoke : the remake</h1>
                <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est <br/> notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas <br/> humanitatis per seacula quarta decima et quinta decima.</p>
                <div className='slider-btn'>
                  <span className='circle'>pg-13</span>
                  <Link className='slider-link'>
                    <i className='fa fa-play'></i>
                    <span>play trailer</span>
                  </Link>
                </div>
            </div>
          </div>
          </div>
          <div className='slider-item'>
             
          <div className='container'>
            <div className='slider-title'>
                <span>action,adventure,comedy</span>
                <h1>up in smoke : the remake</h1>
                <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est <br/> notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas <br/> humanitatis per seacula quarta decima et quinta decima.</p>
                <div className='slider-btn'>
                  <span className='circle'>pg-13</span>
                  <Link className='slider-link'>
                    <i className='fa fa-play'></i>
                    <span>play trailer</span>
                  </Link>
                </div>
            </div>
          </div>
          </div>
        </Slider>
        
   
       
        </Style>             
      );
}
export default Intro;

