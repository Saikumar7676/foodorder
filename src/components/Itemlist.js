import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../Utils/CartSlice'


const Itemlist = ({items}) => {


    const dispatch=useDispatch()

   const cartitems=useSelector((store)=>store.cart.items)

    const handlecart=(item)=>{
      dispatch(addItem(item))

      alert(cartitems.length+1 + " items added checkout in cart")
    }
    

  return (
    
    <div>
     
    {
      items.map((item)=>
      (
      <>

      <div className='text-left p-2 py-4 flex border-b-2'>
      <div className='w-9/12 '>
      <h1 className='font-semibold py-1'>{item?.card?.info?.name}</h1>
      <h3 className='py-2'>₹
      {item?.card?.info?.price? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100 }</h3>
      <h6 className='text-xs'>{item?.card?.info?.category}</h6>
      </div>
      <div className='h-24 w-3/12'>
      <div className='absolute'>
      <button className='p-1 mx-16 my-14 bg-white shadow-md rounded-lg text-sm font-semibold hover:bg-black hover:text-white'
      onClick={()=>handlecart(item)}>Add+</button>
      </div>
      <img className="h-24 w-28 rounded-md shadow-lg " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+item.card.info.imageId}/>

      

      </div>
      </div>  
      </>
      )  
      )
    }

    
    </div>
    
  )
}

export default Itemlist