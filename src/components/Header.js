import { useState } from "react";
import { LOGO_URL } from "../Utils/Constant";
import { Link } from "react-router-dom";

const Header=()=>{

    const[login,Setlogin]=useState("Login")
    const[name,setname]=useState("")
    return(
        <div className="head">
        <div className="logo-con ">
           <img 
           className="logo" 
           src={LOGO_URL}/>
        </div>
        <div className="nav">
            <ul>
                <h3>
                <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
                </h3>
                <h3>
                <Link to='/Help' style={{ textDecoration: 'none' }}>Help</Link>
                </h3>
                <h3> <Link to='/Offers' style={{ textDecoration: 'none' }}>Offers</Link></h3>
                <h3> <Link to='/Cart' style={{ textDecoration: 'none' }}>Cart</Link></h3>
            </ul>
        </div>
        <div className="Name">
        <h4 className="" style={{color:"purple"}}>{name}</h4>


        </div>
        
        

        <div className="Login-container">
        <button className="Login" onClick={()=>
        {
            login==="Login"? Setlogin("Logout") :Setlogin("Login")
            login==="Login"? setname("Hi Sai😊"):setname("")
        }}>
        {login}

        </button>

            
        </div>
       

        </div>
    )
}

export default Header;