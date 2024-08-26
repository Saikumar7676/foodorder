import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Help from "./src/components/Help";
import Cart from "./src/components/Cart";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { Provider } from "react-redux";
import Appstore from "./src/Utils/Appstore";
import Payment from "./src/components/Payment";
import GroceryItems from "./src/components/GroceryItems";
import Grocery from "./src/components/Grocery";

const AppLayout=()=>{
    return(
      <Provider store={Appstore}>
        <div>
          <Header/>
          <Outlet/>
        </div>
        </Provider>
    )
}


const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:'/Help',
        element:<Help/>
      },
      {
        path:'/Grocery',
        element:<Grocery/>
      },
      
      {
        path:'/Cart',
        element:<Cart/>
      },
      {
        path:'/Restaurant/:resId',
        element:<RestaurantMenu/>
      },
      {
        path:'/Cart/payment',
        element:<Payment/>
      },
      {
        path:'/Grocery/GroceryItems',
        element:<GroceryItems/>
      },
    

    ]
  },
  

])
const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>)
  