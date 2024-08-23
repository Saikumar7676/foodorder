import React, { useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../Utils/useRestaurantMenu';

const RestaurantMenu = () => {

  const{resId}=useParams()

  const Menu=useRestaurantMenu(resId);

  console.log(Menu)

    if(Menu==null) return <Shimmer/>



    const {name,cuisines,locality}=Menu?.cards[2]?.card?.card?.info;

    const{itemCards}=Menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card;

    console.log(itemCards)

  return (
    <div className='ml-20'>

    <h4 className='mt-5 font-semibold'>{name}</h4>
    <h4 className='mt-5 font-semibold'>{cuisines.join(' , ')}</h4>
    <h4 className='mt-5 font-semibold'>{"Outlet | "+locality}</h4>
    <h4 className='mt-5 font-semibold'>Menu</h4>
   

    {itemCards.map((item)=>
    (
    <h5 className="mt-2"key={item.card.info.id}>{item.card.info.name}-Rs:{item.card.info.price/100 || item.card.info.defaultPrice/100}</h5>
    ))}



    </div>
  )
}

export default RestaurantMenu

