// RegistrationForm.js

import { useState } from "react";

const RegistrationForm = ({onreg}) => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        image:null
    })
    const handleInputChange = (event) =>{
        // console.log(event.target.value);
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]:value})
    }

    const handleEmailChange = (event)=>{
        // console.log(event.target.value);
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]:value})
    }

    const handleImageChange = (event) =>{
        setFormData({
            ...formData,
            image:event.target.files[0]})
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData);
        //pass formdata to the parent
            onreg(formData);
        //Reset the form data
        setFormData({
            name:'',
            email:'',
            image:null
        })
    }
    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" name="name" value = {formData.name} onChange={handleInputChange}/>
                <label>Email:</label>
                <input type="email" name="email" value = {formData.email} onChange={handleEmailChange}/>
                <label>Image:</label>
                <input type="file" accept="image/*" name="image" onChange={handleImageChange}/>
                <button type="submit">Register</button>
            </form>
        </>
     );
}
 
export default RegistrationForm;