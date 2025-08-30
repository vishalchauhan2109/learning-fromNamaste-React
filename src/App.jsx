import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Contact";
import Error from "./Error";
import Cart from "./Cart";
import RestaurentData from "./restaurentData";
// import OnlineStatus from "./Components/utils/OnlineStatus";
//
const AppLayout = () => {
    return (

        <div className="app">
            <Header />
            <Outlet />
           
        </div>
    )
}

const approuter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,

        children: [

            {
                path : "/",
                element : <Body/>,
            },
            {


                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/restaurent/:resId",
                element: <RestaurentData/>
            },
          

        ],

        errorElement: <Error />
    },

])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);