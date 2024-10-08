import React from 'react'

const Help = () => {
  return (
    <>
    <div className='bg-gray-700 rounded-md w-5/12 p-2 m-5 text-white '>
      <h1 className=' ml-10 font-bold text-xl pt-5'> Help & Support</h1>
      <h3 className='ml-10 pt-2 font-semibold'>Let's take a step ahead and help you better.</h3>
    </div>
    <div class='flex items-center justify-center mt-24'>
    <button type="button" class="bg-purple-600 h-max w-max rounded-lg text-white font-bold hover:bg-indigo-300 hover:cursor-not-allowed duration-[500ms,800ms]" disabled>
        <div class="flex items-center justify-center m-[10px]"> 
            <div class="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
            <div class="ml-2"> Help is under developement... </div>
        </div>
    </button>
</div>
</>
    
  )
}

export default Help