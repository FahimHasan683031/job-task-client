import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Privet from "../Privet/Privet";
import ErrorPage from "../Pages/ErrorPage";
import AllTasks from "../Pages/AllTasks/AllTasks";
import CreateTask from "../Pages/CreateTask/CreateTask";
import ManageTask from "../Pages/ManageTask";
import UpdateTask from "../Pages/UpdateTask";

export const router = createBrowserRouter([ 
    {
        path:'/',
        element:<MainLayout />,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/allTasks',
                element:<AllTasks/>
            },
            {
                path:'/createTask',
                element:<Privet><CreateTask/></Privet>
            },
            {
                path:'/manageTasks',
                element:<ManageTask/>,
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<Signup/>
            },
            {
                path:'/updateTask/:id',
                element:<UpdateTask/>,
                loader:({params})=>fetch(`https://homerepair-servier.vercel.app/api/v1/services/${params.id}`,{credentials:'include'})
            },
          
        ]
    },
  
])