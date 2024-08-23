import React, { useEffect } from 'react'

const Grocery = () => {

    useEffect(()=>{
        fetchGrocery();

    },[])

    const fetchGrocery=async()=>{

        const data=await fetch("https://www.bigbasket.com/listing-svc/v2/products?type=pc&slug=eggs-meat-fish&page=1");
        const json=await data.json();
        console.log(json)

    }
  return (
    <div>Grocery</div>
  )
}

export default Grocery