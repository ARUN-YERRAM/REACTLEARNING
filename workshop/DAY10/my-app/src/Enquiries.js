import axios from "axios";
import { useEffect, useState } from "react";

const Enquiries = () => {

    let [allEnquiries,setAllEnquiries] =  useState([]);

    useEffect( () =>{
        let fetchData = async () => {
            try{
                let response = await axios.get(process.env.REACT_APP_BACKEND_URL+"enquiries")
                let data = await response.data;
                setAllEnquiries(data);
                console.log(allEnquiries);
            }
            catch(err){
                console.log(" error while fetching enquiries");
                console.log(err);
            }
        }   
        fetchData();
    }
    ,[]);
    
    return ( 
    <div className="row">
        <h5> Enquiries</h5>
        <div   className="table-responsive" >

    <table className="table table-primary" >
        <thead>
            <tr>
                <th scope="col">Address</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile Number</th>
                <th scope="col">Comments</th>
            </tr>
        </thead>
        <tbody>   
            {
                allEnquiries.map((enquiry) => {
                        return (
                        <tr className="">
                            <td scope="row">{enquiry.address} </td>
                            <td>{enquiry.name}</td>
                            <td> {enquiry.email}</td>
                            <td>{enquiry.mobilenum} </td>
                            <td>{enquiry.remarks} </td>
                        </tr>
                        )
                })
            }        
            
        </tbody>
    </table>
</div>


        </div>
     );
}
 
export default Enquiries;