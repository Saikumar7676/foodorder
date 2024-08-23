import React, { useEffect, useState } from 'react'

const useOnlinStatus = () => {

    const [onlinestatus,Setonlinestatus]=useState(true);

    useEffect(()=>{
        window.addEventListener("offline" ,()=>{
            Setonlinestatus(false)
        })
        window.addEventListener("online" ,()=>{
            Setonlinestatus(true)
        })
    },[])
  return onlinestatus;
  
}

export default useOnlinStatus