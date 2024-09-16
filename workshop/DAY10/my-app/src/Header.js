import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Header = () => {

    let navigate = useNavigate();
    let locObj = useLocation();
    
    //find if user has any notifications from collection notifi status
    
    let [notifStatus, setNotifStatus] =  useState(true);

    console.log(locObj);
    let loginHandler= () =>{
        navigate('/login');
    }

    let logoutHandler = () => {
        localStorage.clear();
        navigate('/');
    }

    let signupHandler = () => {
        navigate('/signup');
    }



    return ( 
        <> 

<div className="mask text-light justify-content-center flex-column text-center" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <div className='col-10 float-start'>
                    <h4> Welcome to OurHomes!
                    {/* <Link to="/loginjwt">    <button className='btn btn-secondary'> Login JWT</button></Link> */}
                    </h4>
            </div>           

            <div className='col-2 float-end'> 
                {
                    (localStorage.getItem('loggedIn') == "true") 
                    ?      
                    <>             
                    {"Hello " + localStorage.getItem("rname")   }           
                    <button onClick={logoutHandler} className="btn btn-primary mx-3">Logout</button>
                    </>
                    :
                    <> 
                    <button onClick={loginHandler} className="btn btn-primary mx-3">Login</button>
                    <button onClick= {signupHandler} className="btn btn-success">Sign Up</button>
                    </>
                }

                
                <button className="btn btn-primary"  >     Notifications
                {
                    notifStatus ?  <span className="badge bg-danger">12</span> : <span className="badge bg-success">12 </span>
                }
                </button>
                
                <Link to="/" > i</Link>
                  
              
            </div>
                  
            
              
</div> 
        
<div className="mask text-light flex-column text-center" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        <Link to="/listahouse"> 
            <button className="btn btn-warning btn-small">
                List a house 
            </button> 
        </Link>  
        <Link to="/search">
            <button className="btn btn-success btn-small">
                Look up a house
            </button>
        </Link>
            
</div> 



            {/* <div className="col-sm-4">
                {
                (sessionStorage.getItem("name")) 
                ?
                <button onClick={logoutHandler} className="btn btn-primary mx-3">Logout</button>
                 :
                 <> 
                 <button onClick={loginHandler} className="btn btn-primary mx-3">Login</button>
                 <button onClick= {signupHandler} className="btn btn-success">Sign Up</button>
                 </>
                    }
            </div> */}


        </>
     );
}
 
export default Header;




