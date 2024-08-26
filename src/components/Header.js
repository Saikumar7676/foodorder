import { useState } from "react";
import { LOGO_URL } from "../Utils/Constant";
import { Link } from "react-router-dom";
import useOnlinStatus from "../Utils/useOnlinStatus";
import { useSelector } from "react-redux";

const Header=()=>{

    const[login,Setlogin]=useState("Login")
    const[name,setname]=useState("")

    const onlinestatus=useOnlinStatus();

    const cart=useSelector((store)=>store.cart.items)

    return(
        <div className="head flex bg-slate-200 shadow-xl mt-2 mx-2  rounded-md">
        <div className="rounded ml-1">
           <img 
           className="h-20 w-20 rounded-md" 
           src={LOGO_URL}/>
        </div> 
        <div className="flex">
            <ul className="flex mt-6 mx-10  font-semibold text-lg ">
                <h3 className="hover:text-fuchsia-700 ">
                <Link to='/' style={{ textDecoration: 'none' }}>Food</Link>
                </h3>
               
                <h3 className="ml-6 hover:text-fuchsia-700">
                <Link to='/Grocery' style={{ textDecoration: 'none' }}>Grocery</Link>
                </h3>
                <h3 className="ml-6 hover:text-fuchsia-700"> <Link to='/Help' style={{ textDecoration: 'none' }}>Help</Link></h3>
                <h3 className="ml-6 hover:text-fuchsia-700"> <Link to='/Cart' style={{ textDecoration: 'none' }}>Cart-{cart.length}</Link></h3>
                
            </ul>
        </div>
        <div className="mt-6 ml-[40%] font-semibold">
        <h3>
                    Online:{onlinestatus ? "✔️":"❌"}
         </h3>


        </div>
        
        

        <div class="mt-4  ml-5 border-solid">
        <button className="border-solid  hover:bg-purple-400 hover:text-white font-semibold outline-1 shadow-lg p-2 rounded-md" onClick={()=>

        {
            login==="Login"? Setlogin("Logout") :Setlogin("Login")
            login==="Login"? setname("Hi Sai😊"):setname("")
        }}>
        {login}

        </button>
        
        </div>
        <h4 className="mt-6 ml-5 font-semibold" style={{color:"purple"}}>{name}</h4>
       

        </div>
    )
}

export default Header;