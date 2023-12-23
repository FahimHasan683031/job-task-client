import { useLoaderData, useLocation } from 'react-router-dom';
import toast from "react-hot-toast";
import useAuthContext from '../Hoocks/useAuthContext';
import useAxiosSecure from '../Hoocks/useAxiosSicure';
import { useEffect } from 'react';

const UpdateTask = () => {
    const location = useLocation()
    useEffect(() => {
        document.title = "Task Manager" + location.pathname
    }, [location])
    const axiosSecure = useAxiosSecure()
    const data = useLoaderData()
    const { user } = useAuthContext()
    const formHandle = e => {
        e.preventDefault()
        const form = e.target;
        const taskTitle = form.taskTitle.value;
        const date = form.date.value;
        const time = form.time.value;
        const priority = form.priority.value;
        const taskDescription = form.taskDescription.value;
        const email=user?.email

        const task = {taskTitle,date,time,priority,taskDescription,email }


        axiosSecure.put(`/tasks/${data._id}`, task)
            .then(res => {
                if (res.data.modifiedCount) {
                    toast.success('Successfully Update Service!')
                
                }

            })
            .catch(err => console.log(err.message))
    }
    return (
        <div className="max-w-screen-xl mx-auto px-6">
            <form className="max-w-md mx-auto bg-sky-200 drop-shadow-lg my-24 px-6 py-8 rounded-lg text-base text-black" onSubmit={formHandle} action="">

                <h1 className="text-center text-sky-600 mb-12 md:text-5xl text-3xl font-bold">Update Task</h1>


                <div className=" w-full">
                    <label>
                        Task Title
                    </label>
                    <input required  className="w-full mt-1 px-4 py-2 drop-shadow-lg mb-4 rounded  " defaultValue={data.taskTitle} type="text" name="taskTitle" id="" />
                </div>
                <div className=" w-full">
                    <label>
                        Select Priority
                    </label>
                    <select name="priority" required defaultValue={data.priority} className="w-full mt-1 px-4 py-2 drop-shadow-lg mb-4 rounded  " id="">
                        <option disabled value='deafult'>Select Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="Heigh">Heigh</option>
                    </select>
                </div>

                <div className="flex gap-4">
                    <div className=" w-full">
                        <label>
                            Select Date
                        </label>
                        <input defaultValue={data.date} name="date" required className="w-full mt-1 px-4 py-2 drop-shadow-lg mb-4 rounded  " type="date" id="" />
                    </div>
                    <div className=" w-full">
                        <label>
                            Select Time
                        </label>
                        <input defaultValue={data.time} name="time" required className="w-full mt-1 px-4 py-2 drop-shadow-lg mb-4 rounded  " type="time" id="" />
                    </div>
                </div>




                <textarea defaultValue={data.taskDescription} required className=" my-3 w-full md:my-6 drop-shadow-lg p-3 rounded flex-1 " name="taskDescription" placeholder="Enter Task Description" id="" rows="5"></textarea>


                <input className="w-full font-bold my-3 cursor-pointer py-3 rounded-md text-white bg-sky-600" type="submit" value="Update" />
            </form>

        </div>
    );
};

export default UpdateTask;







