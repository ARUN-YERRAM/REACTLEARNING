// UserList.js

import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        try{
            const getData = async() =>{
                const response = await axios.get('https://reqres.in/api/users?page=2');
                // console.log(response.data.data);
                setUsers(response.data.data);
                console.log(users);  
            }
            getData();
        }catch(error){
            console.log("Error in fetching data", error);
        }
    },[]);
    
    return ( 
        <>
            <div className = "row">
                {users.map((user)=>(
                    <div key={user.id} className="col-md-3 md-3">
                        <UserCard user = {user}/>
                    </div>)
                )}
            </div>
        </>
    );
}
    
export default UserList;