import React from 'react'

const Payment = () => {
  return (
    <div class='flex items-center justify-center mt-40'>
    <button type="button" class="bg-indigo-600 h-max w-max rounded-lg text-white font-bold hover:bg-indigo-300 hover:cursor-not-allowed duration-[500ms,800ms]" disabled>
        <div class="flex items-center justify-center m-[10px]"> 
            <div class="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
            <div class="ml-2"> Processing... </div>
        </div>
    </button>
</div>
    

    
  )
}

export default Payment