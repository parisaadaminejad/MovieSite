import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {apiKey} from '../../constant';

const Details = (props) => {
    const {id} = useParams();
    useEffect(()=>{
        fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
        
        .then((response)=> {return response.json()})
        .then(data => {
            console.log(data)
            
        })
        .catch(error => {
            console.log(error)
            
        })
    
    },[])
    
    console.log({id})
    return(
        <p>details{id}</p>
    )
}
export default Details;