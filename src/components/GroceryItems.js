import React from 'react'

const GroceryItems = () => {
  return (
    <div class='flex items-center justify-center mt-24'>
    <button type="button" class="bg-purple-600 h-max w-max rounded-lg text-white font-bold hover:bg-indigo-300 hover:cursor-not-allowed duration-[500ms,800ms]" disabled>
        <div class="flex items-center justify-center m-[10px]"> 
            <div class="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
            <div class="ml-2"> Grocery Store is under developement... </div>
        </div>
    </button>
</div>
  )
}

export default GroceryItems