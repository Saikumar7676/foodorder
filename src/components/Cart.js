import { useDispatch, useSelector } from "react-redux"
import Itemlist from "./Itemlist"
import { Cleartcart } from "../Utils/CartSlice"
import { Link } from "react-router-dom"

 const Cart = () => {

  const cartitems=useSelector((store)=>store.cart.items)

  const dispatch=useDispatch()


  const handleclear=()=>{

    dispatch(Cleartcart())


  }
  let totalprice=0;
  {
    cartitems.map((item)=>
    totalprice=totalprice+item?.card?.info?.price? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100 )
  }
  
  let prices=Math.floor(totalprice)

  console.log(prices)
  return (
    <>
    <div className="flex">
    <div className="m-auto w-5/12 mt-4 ml-80">
    {cartitems.length==0 ? <h1 className="ml-[44%] mt-4 font-bold text-2xl">Cart is Empty</h1>:
    (
      <div className="text-center">
      <button className="bg-black text-white p-2  rounded-md shadow-md"
      onClick={()=>handleclear()}>Clear Cart</button>
    </div>

    )}
    <div className='  '>

    <Itemlist items={cartitems}/>


    </div>
    </div>
    <div className="w-3/12 m-auto shadow-xl p-2 mt-6 mr-2 sticky top-14 rounded-lg">
      <h1 className=" text-center border-b-2 pb-2  font-semibold"> Checkout</h1>
      {
        cartitems.map((item)=>
        <>
        <div className="flex justify-between">
        <h1 className="text-xs py- font-semibold">{item.card.info.name}</h1>
        <h2 className=" text-xs py-1"> ₹ {item?.card?.info?.price? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100 }</h2>
        </div> 
        
        </>
        )

      }
      {cartitems.length>0 ? (
      <Link to='/Cart/payment'><div className="bg-purple-700 text-white p-2 text-center rounded-lg shadow-xl mt-2">
      <button className=" cursor-pointer">Pay Now ₹{prices}</button>
      </div>
      </Link>
      ): <h1 className="text-center p-2 m-2">No Items to checkout</h1>
      }


    </div>
    
    
    </div>

   
  


    
    </>
  )
}
export default Cart
