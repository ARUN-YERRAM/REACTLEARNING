import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Enquiry from "./Enquiry";
// import Enquiry from "./Enquiry";

const House = () => {
    
    let [houseInfo,setHouseInfo] = useState([]);
    const paramsObj = useParams();
    // console.log(houseInfo)
    // console.log(showEnquiry)
    

    useEffect(()=>{
        
        let fetchData = async() =>{
          // USING BACK END Server
         console.log("env"+process.env.REACT_APP_BACKEND_URL);
         console.log(process.env.REACT_APP_BACKEND_URL+"house/"+paramsObj.id);
         let response = await axios.get(process.env.REACT_APP_BACKEND_URL+"house/"+paramsObj.id);
         //console.log(response.data);
         setHouseInfo(response.data);
         //console.log(" got single house data");
        }
        fetchData();
      },[])


    if(!houseInfo) {
        return <h1>loading...</h1>
    }

    const imagePath = `/imgs/${houseInfo.photo}`


    return ( 
        <div className="row">
            <div className="col-sm-7">
                {houseInfo.address}
            </div>
            <div className="col-sm-5">
                Price: {houseInfo.price}
            </div>
            <div className="col-sm-7">
                <img src={imagePath} className="img-fluid" alt="image " />
            </div>
            <div className="col-sm-5">
                <p>
                    {houseInfo.description}
                </p>

            {/* for now show the enquiry form, once login works, check and show only when logged in     */}
            
            { (localStorage.getItem("loggedIn")=="true") && <Enquiry address={houseInfo.address} /> }
          


            </div>
        </div>
        // <div>
        //     Check
        // </div>
     );
}
 
export default House;