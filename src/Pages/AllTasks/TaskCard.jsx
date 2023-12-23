import { Link } from "react-router-dom";

const TaskCard = ({task}) => {
    return (
        <div className={`w-[300px] overflow-hidden text-white bg-sky-600  p-6 rounded`}>
            <h1 className="text-3xl text-slate-800 font-medium">{task.taskTitle}</h1>
            <h2 className="my-3">{task.taskDescription}</h2>
            <p className="mb-3 text-lg font-medium text-gray-200"> Priority: {task.priority}</p>
            <div className="flex gap-3 mb-4">
                Deadlines:
                <p >{task.date}</p>
                <p >{task.time}</p>
                
            </div>
            <Link className="px-3 py-1 text-white bg-rose-600 rounded mt-5" to={`/updateTask/${task._id}`}>Update</Link>
        </div>
    );
};

export default TaskCard;