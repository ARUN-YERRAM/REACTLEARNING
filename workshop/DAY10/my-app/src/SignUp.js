import { useState } from "react";
import axios from 'axios';

const SignUp = () => {
    const [formObj, setFormObj] = useState({ name: "", email: "", password: "", phone: "" });
    let [signedUp,setSignedUp] = useState(false);
    let [errorSigningUp,setErrorSigningUp] = useState('');

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
           
            // this does not require headers to be changed, as we have app.use(express.json()) in index.js
            // let resp = await axios.post(process.env.REACT_APP_BACKEND_URL+'signup',{...formObj});
            let resp = await axios.post(process.env.REACT_APP_BACKEND_URL+'register',{...formObj});
            console.log(resp);
            if(resp.data){
                setSignedUp(true);
                console.log(" successfully signedup");  
            }
            else {
                setSignedUp(false);
                setErrorSigningUp(" Error while signing up");
            }            

        }
        catch(error){
            console.log(" error while signing");
            console.log(error);
            setSignedUp(false);
            setErrorSigningUp(" Error while signing up");
            
        }
    };



    return (
        (signedUp)     
        ?       
        <div className="mb-4">
            <h5> Congratulations! You are now registered with us! Please login.</h5>
        </div>
        :
        <div className="d-flex justify-content-center mt-5">
            <form className="w-50" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        id="phone"
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        onChange={changeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        onChange={changeHandler}
                    />
                </div>
                <button type="submit" className="btn btn-dark">SignUp</button>
            </form>
        </div>
    );
};

export default SignUp;
