import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Contact";
import Error from "./Error";
import Cart from "./Cart";
import RestaurentData from "./RestaurentData";
import UserContext from "./Components/utils/UserContext";
// import OnlineStatus from "./Components/utils/OnlineStatus";
//
const AppLayout = () => {
    return (
        // CONTEXT API  ---> UserContext.provider se UserContext wala mai jo loggedin user hai uski value mai change kar sktye hain aaise hi value dekr jaise niche di hai
        //  jitne ko wrap kroge utne mai hi change hoga isse 
        <UserContext.Provider value={{ loggedInUser: "chauhanji" }}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>


    )
}

const approuter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,

        children: [

            {
                path: "/",
                element: <Body />,
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
                element: <Cart />
            },
            {
                path: "/restaurent/:resId",
                element: <RestaurentData />
            },


        ],

        errorElement: <Error />
    },

])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);