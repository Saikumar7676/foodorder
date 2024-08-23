import React, { useState, useEffect } from 'react'


export const useResList = () => {

    const[filterdata,Setfilterdata]=useState();

    useEffect(()=>{
        fetchData();    
      
    },[])
    const fetchData= async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3417502&lng=78.5682144&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
        const json=await data.json();
        Setfilterdata(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    
    }
    
  return filterdata

}
