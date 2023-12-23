import { useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import TaskCard from "./TaskCard";
import useAuthContext from "../../Hoocks/useAuthContext";
import useAxiosSecure from "../../Hoocks/useAxiosSicure";



const AllTasks = () => {
    const axiosSecure =useAxiosSecure()
    const {user}=useAuthContext()
    const [tasks,setTasks] =useState([])
    const location = useLocation()
    useEffect(() => {
        document.title = "Home Repair" + location.pathname
        axiosSecure.get(`/tasks?email=${user?.email}`)
        .then(data=>setTasks(data.data))
        .catch(err=>console.log(err.message))
    }, [location,axiosSecure,user])

   if(tasks?.length===0){
    return(
        <div className="flex align-middle h-screen justify-center items-center">
            <h1 className="text-5xl font-bold text-sky-500">You do not have any tasks.</h1>
        </div>
    )
   }

    return (
        <div>
            


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto px-6 mt-7 mb-16">
                {
                    tasks?.map(task=><TaskCard key={task._id} task={task}/>)
                }
            </div>


        </div>
    );
};

export default AllTasks;