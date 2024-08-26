import React, { useState } from 'react'
import Itemlist from './Itemlist'
import { useSelector } from 'react-redux'

const MenuCards = ({data}) => {

  const[showitems,setshowitems]=useState(false)

  function handletoggle(){

    setshowitems(!showitems)
    console.log(showitems)

  }
  const cartitems=useSelector((store)=>store.cart.items)

    console.log(cartitems)

  return (
    <div>
    
    
    <div className='w-6/12 mx-auto my-5 p-3 rounded-md shadow-lg'>
    <div className='flex justify-between cursor-pointer' onClick={handletoggle}>
        <h1 className='font-semibold'>{data.title}-({data.itemCards.length})</h1>
        <h1>🔽</h1>
    </div>

            
    {    
      showitems && (<Itemlist items={data.itemCards}/>) }

    </div>
    </div>
  )
}

export default MenuCards