import RestauranCard from "./RestauranCard";
import {resList}  from "../Utils/Mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body=()=>{

const [List,SetList]=useState([]);
const [searchtext, Setsearchtext]=useState('')
const [filterdata,Setfilterdata]=useState([])
const[name,setname]=useState("")

useEffect(()=>{
    fetchData();
  
},[])
const fetchData= async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3417502&lng=78.5682144&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json=await data.json();
    SetList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    Setfilterdata(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

}
if(List.length===0){
    return <Shimmer/>
}


    return(
        <>
        <div className="Search">
       <input type="text" placeholder="Search Restaurant" value={searchtext} onChange={
        (e)=>Setsearchtext(e.target.value)
       }/>
       <button className="button"
       onClick={()=>{
        const filtereddata=List.filter((res)=>
        res.info.name.toLowerCase().includes(searchtext.toLowerCase()
        ))
        Setfilterdata(filtereddata)
       }}>Search</button>
       <button className="topButton"
       onClick={()=>{
        const filtereddata=List.filter((res) =>res.info.avgRating > 4.2);
        Setfilterdata(filtereddata)
       }}>Top Rated</button>

       </div>
       <div className="cards">
       {
        filterdata.map((Restaurant)=>(
            <Link to={"/Restaurant/"+Restaurant.info.id} style={{ textDecoration: 'none',color:'black' }}>

            <RestauranCard key={Restaurant.info.id } resData={Restaurant}/>
            </Link>
        ))
       }
       </div>
       </>
       
    )
}
export default Body