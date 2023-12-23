

const ManageTaskCard = ({ task }) => {
    
    return (
        <div  draggable='true' className="list text-center bg-sky-600 m-2 p-2 text-white" >
            <div>
            <h1 className="text-xl font-medium">{task.taskTitle}</h1>
            <div className="flex gap-3 text-sm justify-center">
                Deadlines:
                <p >{task.date}</p>
                <p >{task.time}</p>

            </div>
            </div>
        </div>
    );
};

export default ManageTaskCard;