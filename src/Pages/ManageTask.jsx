
import { useEffect, useState } from "react";
import useAxiosSecure from "../Hoocks/useAxiosSicure";
import useAuthContext from "../Hoocks/useAuthContext";
import ManageTaskCard from "./ManageTaskCard";



const ManageTask = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuthContext()
    const [tasks, setTasks] = useState([])


    useEffect(() => {
        axiosSecure.get(`/tasks?email=${user?.email}`)
            .then(data => setTasks(data.data))
            .catch(err => console.log(err.message))
    }, [axiosSecure, user])

    
    let lists = document.getElementsByClassName('list');
    let left = document.getElementById('left')
    let right = document.getElementById('right')

    for (let list of lists) {
        list.addEventListener("dragstart", function (e) {
            let selected = e.target;

            right.addEventListener("dragover", function (e) {
                e.preventDefault()
            })
            right.addEventListener('drop', function (e) {
                right.appendChild(selected)
                selected = null;
            })
            left.addEventListener("dragover", function (e) {
                e.preventDefault()
            })
            left.addEventListener('drop', function (e) {
                left.appendChild(selected)
                selected = null;
            })
        })
    }

    return (
        <div className="flex items-center justify-center my-11 gap-7">
            <div id="left" className="w-[280px] border border-black">
                <h1 className="text-4xl font-bold text-sky-600 text-center my-3">On Going</h1>
                {
                    tasks.map(task => <ManageTaskCard key={task._id} task={task} />)
                }
            </div>
            <div id="right" className="w-[280px] h-[380px] border border-black">
                <h1 className="text-4xl font-bold text-sky-600 text-center my-3">Complete</h1>
            </div>
        </div>
    );
};

export default ManageTask;