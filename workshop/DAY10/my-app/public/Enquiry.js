import axios from "axios";
import { useState } from "react";

const Enquiry = (props) => {

    let [enquiryObject,setEnquiryObject] = useState({email:"",name:"",mobilenum:"",remarks:""});
    let [submittedEnquiry,setsubmittedEnquiry] = useState(false);

    let onChangeHandler = (e) => {
        setEnquiryObject({...enquiryObject,[e.target.name]:e.target.value});
        //console.log(enquiryObject);
    }

    let onClickHandler = async () => {
        console.log("clicked submit enquiry");
        try{
           enquiryObject = {...enquiryObject,address:props.address};
           console.log(enquiryObject);
           let response = await axios.post(process.env.REACT_APP_BACKEND_URL+'addenquiry',{...enquiryObject});
           console.log(response.data);
           console.log(" enquiry submitted");
           setsubmittedEnquiry(true);
        }
        catch(err){
            console.log(" error while adding enquiry");
            setsubmittedEnquiry(false);
        }
    }

    return ( 
        (submittedEnquiry) 
        ?
        <div  className="mt-3">
                <h5> Thanks for submitting! Our realtor will get in touch with you soon!</h5>
        </div>
        :
        <div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    name="email"
                    id=""
                    aria-describedby="emailHelpId"
                    placeholder="abc@mail.com"
                    onChange={onChangeHandler}
                />
               
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    onChange={onChangeHandler}
                />
               
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Mobile</label>
                <input
                    type="text"
                    className="form-control"
                    name="mobilenum"
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    onChange={onChangeHandler}
                />
               
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Remarks</label>
                <input
                    type="text"
                    className="form-control"
                    name="remarks"
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    onChange={onChangeHandler}
                />
               
            </div>
            
        <button
            type="submit" onClick={onClickHandler}
            className="btn btn-primary"
        >
            Submit
        </button>
        

            
            
            
        </div>
     );
}
 
export default Enquiry;