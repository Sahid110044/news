import { createBrowserRouter } from "react-router";
import Layout from "../Components/Layout";
import Errorpage from "../Components/Errorpage"
import Home from "../pages/Home";
import About from "../pages/About";
import Crousel from "../pages/Crousel"
import Login from "../Components/Login";
import Newsboard from "../Components/Newsboard";


const router = createBrowserRouter([
    {
    path:'/', 
    element:<Layout/>,
    errorElement:<Errorpage/>,
    children:[
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/about',
        element:<About/>
    },
    {
        path:'/crousel',
        element:<Crousel/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/newsboard',
        element:<Newsboard/>
    }
    ]

    }]

   ,{
       //base name is used to fix use the base name in vite.config.js otherwise router will throw error
       basename:"/news",     
}
)
export default router
