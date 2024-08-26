import React from 'react'

const Footer = () => {
  return (
    <>
    <div className=' flex pt-20 bg-gray-100'>
    <h1 className='font-bold text-3xl text-gray-800 pt-10 pl-10'>For better experience, download <br></br>the Master Chef app now</h1>
    <img  className='h-20 w-64 pl-12 mt-12' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"/>
    <img  className='h-20 w-64 pl-12 mt-12' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"/>

    </div>

    <div className='bg-black flex h-96 mt-2'>
    <div className=' text-white pl-40 pt-16'>
    <h1 className='font-bold'>Master Chef</h1>
    <h2 className=''>@2024 Sai Technologies Pvt. Ltd</h2>
    </div>

    <div className=' text-white ml-16 mt-10 cursor-pointer'> 
    <h1 className='font-bold'>Company</h1>
    <ul className='text-gray-300 mt-2'>
        <h3>About</h3>
        <h3>Careers</h3> 
        <h3>Team</h3>
        <h3>Grocery</h3>
        <h3>Ride with us</h3>
    </ul>


    </div>
    <div className='text-white ml-16 mt-10 cursor-pointer'>
        <h1 className='font-bold '>Legal</h1>
        <ul className='text-gray-300 mt-2'>
            <h3>Terms and Conditions </h3>
            <h3>Cookie Policy</h3>
            <h3>Privacy Policy</h3>
            <h3>Investor Relations</h3>
        </ul>

        <h1 className='font-bold mt-8'>Contact Us</h1>
        <ul className='mt-2 text-gray-300'>
            <h3>Help and Support</h3>
            <h3>Patner with us</h3>
            <h3>Ride with us</h3>
        </ul>
    </div>
    <div className='text-white ml-20 mt-10 cursor-pointer'>
        <h1 className='font-bold '>We are in:</h1>

        <ul className='mt-2 text-gray-300'>
            <h3>Hyderabad</h3>
            <h3>Banglore</h3>
            <h3>Suryapet</h3>
            <h3>Chennai</h3>
            <h3>Mumbai</h3>
            <h3 className='ml-1 text-gray-100'>More</h3>
        </ul>
    </div>
    </div>
    </>
  )
}

export default Footer