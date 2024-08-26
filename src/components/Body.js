import RestauranCard from "./RestauranCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinStatus from "../Utils/useOnlinStatus";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

const Body=()=>{

const [List,SetList]=useState([]);
const [searchtext, Setsearchtext]=useState('')
const [filterdata,Setfilterdata]=useState([])

const onlinestatus=useOnlinStatus();

useEffect(()=>{
    fetchData();    
  
},[])
const fetchData= async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3417502&lng=78.5682144&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json=await data.json();
    SetList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    Setfilterdata(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

}

if(onlinestatus===false) 
     return <h1 style={{color:"purple"}}>Looks like your offline!! Please check your internet connection</h1>

if(List.length===0){
    return <Shimmer/>
}


    return(
        <>
    
       <Dashboard/>
       <div className=" mt-10 ml-96 ">
       <input  className="h-10 w-44 border border-solid border-black shadow-xl rounded-l-lg  " type="text" placeholder=" Search Restaurant" value={searchtext} onChange={
        (e)=>Setsearchtext(e.target.value)
       }/>
       <button className="ml-2 p-2 text-white rounded-md shadow-xl font-semibold bg-green-500"
       onClick={()=>{ 
        const filtereddata=List.filter((res)=>
        res.info.name.toLowerCase().includes(searchtext.toLowerCase()
        ))
        Setfilterdata(filtereddata)
       }}>Search</button>
       <button className="ml-8 font-bold rounded-md p-2 shadow-xl  bg-purple-600 text-white"
       onClick={()=>{
        const filtereddata=List.filter((res) =>res.info.avgRating > 4.2);
        Setfilterdata(filtereddata)
       }}>Top Rated</button>
              </div>

<h1 className="font-bold text-2xl text-gray-800 pt-10 pl-10" >Top restaurant chains in Hyderabad</h1>
       <div className=" flex flex-wrap pt-5">
       {
        filterdata.map((Restaurant)=>(
            <Link to={"/Restaurant/"+Restaurant.info.id} style={{ textDecoration: 'none',color:'black' }}>

            <RestauranCard   key={Restaurant.info.id } resData={Restaurant}/>
            </Link>
        ))
       }
       </div>
       <div>
        <Footer/>
       </div>
       </>
       
    )
}
export default Body