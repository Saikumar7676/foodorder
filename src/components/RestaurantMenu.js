import React, { useState } from 'react'
import { useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import Body from './Body';

const RestaurantMenu = () => {

  const{resId}=useParams()

    const[Menu,SetMenu]=useState()

 useEffect(()=>{
        Fetchmenu();
    },[])

    const Fetchmenu=async()=>{
      
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3417502&lng=78.5682144&restaurantId="+resId);
        const json=await data.json();
        console.log(json?.data)

        SetMenu(json.data)
    }

    if(Menu==null) return <Shimmer/>



    const {name,cuisines,locality}=Menu?.cards[2]?.card?.card?.info;

    const{itemCards}=Menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card;


  return (
    <div className='res-menu'>

    <h4>{name}</h4>
    <h4>{cuisines.join(' , ')}</h4>
    <h4>{"Outlet | "+locality}</h4>
    <h4>Menu</h4>
    <ul>
    {itemCards.map((item)=>
    <h5 key={item.card.info.id}>{item.card.info.name}-Rs:{item.card.info.price/100}</h5>)}
   
    </ul>


    </div>
  )
}

export default RestaurantMenu
