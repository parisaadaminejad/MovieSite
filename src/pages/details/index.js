import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {apiKey} from '../../constant';
import { Link } from "react-router-dom";
import {imgServerUrl} from '../../constant';
import get from 'lodash/get';

const Details = (props) => {
    const[details,setDetails]=useState([])
    const {id} = useParams();
    useEffect(()=>{
        fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
        
        .then((response)=> {return response.json()})
        .then(data => {
            console.log(data)
            setDetails(data.results)
        })
        .catch(error => {
            console.log(error)
            
            
        })
    
    },[])

    const RenderForm = () => {
        const result=get(details,'results', [])
        return result.map((item,index) => {
          console.log(item,'details')
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
                    
                 </div>
               </div>
               </div>
              
            )
          
          })
        }
    
    
    
    return(
        // <p>details{id}</p>
        <RenderForm/>
    )
}
export default Details;