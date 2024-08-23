import React, { useEffect, useState } from 'react'

const useRestaurantMenu = (resId) => {

    const [Menu,SetMenu]=useState()

    useEffect(()=>{

        fetchMenu();

    },[])

    const fetchMenu=async()=>{

        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3417502&lng=78.5682144&restaurantId="+resId)
        const json=await data.json();
        SetMenu(json.data)
    }



    
  return Menu
}

export default useRestaurantMenu