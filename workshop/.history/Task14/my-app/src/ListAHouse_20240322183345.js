import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ListAHouse = () => {

    let navigate = useNavigate();
    const [formObj, setFormObj] = useState({id:28,address: "", locality: "", description: "",bhk:"", price: "",photo: ""});
    let [signedUp,setSignedUp] = useState(false);
    let [errorSigningUp,setErrorSigningUp] = useState('');
    let [notSeller,setNotSeller] = useState(false);

    const changeHandler = (e) => {
        //console.log(formObj);
        setFormObj({ ...formObj, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formObj);

        // submit it to the backend server
        try{
             // the below code can be used when we do not have app.use(express.json()) in index.js

            // Add headers to make sure that request data is well formatted (json)
            // let resp = await axios.post('http://localhost:4000/signup',{...formObj},{
            //     headers: {
            //     'Content-Type': 'multipart/form-data'
            //     }
            // });
           

            //

            let resp = await axios.post(process.env.REACT_APP_BACKEND_URL+'listahouse',{...formObj},{headers:{"Authorization":`Bearer ${localStorage.getItem('rtoken')}`}});
             console.log(resp);
            if(resp.data){
                setSignedUp(true);
                console.log(" successfully added");  
            }
            else {
                setSignedUp(false);
               setErrorSigningUp(" Error while adding");
            }            

        }
        catch(error){
            console.log(" error while adding");
            console.log(error);
            setSignedUp(false);
            setErrorSigningUp(" Error while adding up");
            
        }
    };

    useEffect(() => {
        console.log(localStorage.getItem('rrole'));
        if(!localStorage.getItem("loggedIn")) {
            navigate('/login');
        }
        else {
           if(localStorage.getItem("rrole")!="seller"){
            setNotSeller(true);
           }
        }
        });

        if(notSeller) {
                return <h3> You need to be a Seller to List a House.Sorry! </h3>
        }
        else {  
    
        return ( 

            (signedUp)     
            ?       
            <div className="mb-4">
                <h5> Congratulations! Your house has been listed</h5>
            </div>
            :
            <div className="App row">
                <h4> List a house </h4>
                <div className="d-flex justify-content-center">
                <form className="w-50" onSubmit={handleSubmit}>
                    <div className="mb-1">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control"
                            name="address"
                            id="address"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="locality" className="form-label">Locality</label>
                        <input
                            type="text"
                            className="form-control"
                            name="locality"
                            id="locality"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="bhk" className="form-label">BHK count</label>
                        <input
                            type="text"
                            className="form-control"
                            name="bhk"
                            id="bhk"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            id="description"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="password" className="form-label">Price</label>
                        <input
                            type="text"
                            className="form-control"
                            name="price"
                            id="price"
                            onChange={changeHandler}
                        />
                    </div>
                    <div className="mb-1">
                        <label htmlFor="password" className="form-label">Pic</label>
                        <input
                            type="text"
                            className="form-control"
                            name="photo"
                            id="photo"
                            onChange={changeHandler}
                        />
                    </div>
                    <button type="submit" className="btn btn-dark">Publish</button>
                </form>
            </div>



            </div>

        );
        }
}

 
export default ListAHouse;



