import { useParams } from "react-router-dom";
import House from "./House";


const SearchHouse = (props) => {
    let param = useParams();
   // let obj = props.allhouses.find((house)=>{return param.id == house._id})
   // let loggedIn = (sessionStorage.getItem("email")) ? true : false ;



    

    return ( 
        <div>
            <h1> Searched House !</h1>
            {/* <House houseInfo={obj} showEnquiry={loggedIn}/> */}
            
        </div>
     );
}
 
export default SearchHouse;