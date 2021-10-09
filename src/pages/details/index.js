import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {apiKey} from '../../constant';
import { Link } from "react-router-dom";
import {imgServerUrl} from '../../constant';
import get from 'lodash/get';
import Style from "./style";

const Details = (props) => {
    const[details,setDetails]=useState([])
    const {id} = useParams();
    useEffect(()=>{
        fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
        
        .then((response)=> {return response.json()})
        .then(data => {
            console.log(data)
            setDetails(data)
        })
        .catch(error => {
            console.log(error)
            
            
        })
    
    },[])
    const renderFarm =()=>{
        const result=get(details,'data', [])
        const { id,original_title ,overview,name}= details
        const imgUrl =`${imgServerUrl}${details.poster_path}`;
       
        return(
            <div className="imesg">
 <img src={imgUrl}/>
            </div>
           
        )

        
    }

  return(
      <Style>
   {renderFarm()}

      </Style>
    
  )
   
           
        
    
    
}
export default Details;