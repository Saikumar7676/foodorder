import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Help from "./src/components/Help";
import Offers from "./src/components/Offers";
import Cart from "./src/components/Cart";
import RestaurantMenu from "./src/components/RestaurantMenu";

const AppLayout=()=>{
    return(
        <div>
          <Header/>
          <Outlet/>
        </div>
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
        path:'/Offers',
        element:<Offers/>
      },
      {
        path:'/Cart',
        element:<Cart/>
      },
      {
        path:'/Restaurant/:resId',
        element:<RestaurantMenu/>
      }
    

    ]
  },
  

])
const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>)
  