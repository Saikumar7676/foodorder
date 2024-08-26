import React, { lazy, Suspense } from "react";
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

const Grocery=lazy(()=> import('./src/components/Grocery'))

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
        element:<Suspense><Grocery/></Suspense>
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
    

    ]
  },
  

])
const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>)
  