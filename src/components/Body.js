import RestauranCard from "./RestauranCard";
import {resList}  from "../Utils/Mockdata";
import { useState } from "react";

const Body=()=>{

const [List,SetList]=useState(resList);

    return(
        <>
        <div className="Search">
       <input type="text" placeholder="Search Restaurant"/>
       <button className="button">Search</button>
       <button className="topButton"
       onClick={()=>{
        const filtereddata=List.filter((res) =>res.info.avgRating > 4.2);
        SetList(filtereddata)
       }}>Top Rated</button>

       </div>
      
       <div className="cards">
       {
        List.map((Restaurant)=>(
            <RestauranCard key={Restaurant.info.id } resData={Restaurant}/>
        ))
       }
       </div>
       </>
       
    )
}
export default Body