import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import get from 'lodash/get';
import {imgServerUrl} from '../../constant';
import { useEffect, useState } from 'react';
import Style from "./style";




const Intro = (props) => {
  const[movies,setMovies]=useState([])
 
  useEffect(()=>{
    fetch ('https://api.themoviedb.org/3/trending/all/day?api_key=ca63615df43206e538b849cec247424b')
    .then((response)=> {return response.json()})
    .then(data => {
        console.log(data)
        setMovies(data.results)
    })
    .catch(error => {
        console.log(error)
        
    })

},[])

 
  const RenderForm = () => {
    const result=get(movies,'results', [])
    return movies.map((item,index) => {
      console.log(item,'ytr')
      const { id,original_title ,overview,name}= item
      const imgUrl =`${imgServerUrl}${item.poster_path}`;
       
        return(
        
          <div className='slider-item' key={id} style={{
          backgroundImage: `url(${imgUrl})`

          }}>
          
           <div className='container'>
             <div className='slider-title'>
                 <span>{item.name}</span>
                 <h1>{item.original_title}</h1>
                 <p>{item.overview}</p>
                 <div className='slider-btn'>
                  
                   <Link className='slider-link' to={`/details/${id}`}>
                     <i className='fa fa-play'></i>
                     <span>play trailer</span>
                   </Link>
                 </div>
             </div>
           </div>
           </div>
          
        )
      
      })
    }


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
            
 
     
           <RenderForm/>
         </Slider>
        
        </Style>             
      );
}
export default Intro;

