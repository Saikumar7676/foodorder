import React, { useEffect, useState } from 'react'

const Grocery = () => {

  const data=[
    {
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png"

    },
    {
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-2_10.png"
      
    },
    {
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-3_9.png"

    },
    {
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-4_9.png"

    },
    {
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-17.png"

    },
    {
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png"

    },
    {
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-6_5.png"

    },
    {
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-7_3.png"

    },
    {
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-10.png"

    },
    {
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-13.png"

    },
    {
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-15.png"

    },
    {
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-18.png"

    },
    {
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-11.png"
      
    },
    {
      img:"https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-20.png"

    }
  ]
  const[recipe,Setrecipe]=useState(null)

    useEffect(()=>{
        fetchGrocery();

    },[])

    const fetchGrocery=async()=>{

        const data=await fetch("https://api-gateway.zepto.co.in/recipe-service/api/v1/recipes?pageNumber=0&pageSize=10");
        const json=await data.json();
        console.log(json)
        Setrecipe(json)

    }

    if(recipe===null)return<h1></h1>
  return (
    <>
    <div>
      <h1 className='font-bold text-xl text-gray-800 pt-10 pl-10 '>Explore by categories</h1>
    </div>
    <div className='flex flex-wrap'>
      {
        
        data.map((item)=>
          
     <div className='ml-3 mt-5 cursor-pointer'>
        
          
       <img  className="h-48 w-36 flex flex-wrap"src={item.img}/> 
        
       </div>
        )
      }
    </div>
    <div>
      <h1 className='font-bold text-xl text-gray-800 pt-5 pl-10 '>Recipe Ideas</h1>
    </div>
    <div className='flex flex-wrap p-2 ml-5'>
    {
      recipe.map((item)=>
      <div className='ml-4 mt-4 p-1 shadow-lg h-72 w-48 cursor-pointer'>
      <img  className="h-40 w-44 " src={"https://cdn.zeptonow.com/production///tr:w-1000,ar-100-100,pr-true,f-auto,q-80/"+item.imagePath}/>
      <h2 className='mt-2 font-semibold'>{item.name}</h2>  
      <h3 className='mt-2'>{item.cookingTime+" Minutes"}</h3>
      <h4 className='mt-2'>{item.mealType.join(",")}</h4>
      </div>
      
      )
    }

    </div>
    </>
  )
}

export default Grocery