import React, { useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../Utils/useRestaurantMenu';
import MenuCards from './MenuCards';

const RestaurantMenu = () => {

  const{resId}=useParams()

  const Menu=useRestaurantMenu(resId);

  console.log(Menu)

    if(Menu==null) return <Shimmer/>



    const {name,cuisines,locality,costForTwo,avgRating}=Menu?.cards[2]?.card?.card?.info;

    const{itemCards}=Menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;

    const Categories=Menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=>
      c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    
    console.log(Categories)

  return (
    <div className=' text-center  mt-5'>

<div className='w-6/12 m-auto bg-gray-50 rounded-lg border border-solid border-black shadow-lg'>
    <h4 className='mt-5 font-semibold text-xl'>{name}</h4>
    <h4 className='mt-5 font-semibold'>{cuisines.join(' , ')}- Rs: {costForTwo/100 +"  for two"}</h4>
    
    <h4 className='mt-5 font-semibold pb-5'>{"Outlet | "+locality}</h4>

    </div>


    {
      Categories.map((category)=>
     <MenuCards data={category.card.card}/>)
    }
   
    </div>
  )
}

export default RestaurantMenu

