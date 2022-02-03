import {useParams} from "react-router-dom"
//functional component
const Product =()=>{
    const {id} = useParams();
    return(
        <div>This is product section{id}</div>
    )
}
export default Product;