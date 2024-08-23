import React, { useEffect, useState } from 'react'

const Dashboard = () => {

    const[Mind,SetMind]=useState(null);

    useEffect(()=>{

        fetchMind();

    },[])


    const fetchMind=async()=>{

        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3417502&lng=78.5682144&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json.data.cards[0].card.card.imageGridCards.info);
        SetMind(json.data.cards[0].card.card.imageGridCards.info)

    }


    if(Mind===null)return <h1></h1>

    let list=Mind.slice(0,10)


  return (

    <>
    <h1 className='font-bold text-2xl text-gray-800 pt-10 pl-10 '>What's on your mind?</h1>

      <div className='flex flex-wrap '>

  {
    list.map((item)=>
    <div className='flex flex-wrap '>
  <img  className="h-44 w-40 flex flex-wrap  cursor-pointer" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+item.imageId}/>
  </div>
    )
  }

    </div>
    </>
  )
}

export default Dashboard