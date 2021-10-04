import { useParams } from "react-router-dom";

const Details = (props) => {
    const {id} = useParams();
    console.log({id})
    return(
        <p>details{id}</p>
    )
}
export default Details;