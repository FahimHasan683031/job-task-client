import { FaLaptopCode } from "react-icons/fa";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { HiBuildingOffice } from "react-icons/hi2";
import { FaUserDoctor } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
const UsePeopleType = () => {
    return (
        <div className="mb-32 max-w-screen-lg mx-auto">
            <h1 className="text-4xl font-bold text-center text-sky-600 mt-8 mb-20">Who Can Use It?</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                <div className="bg-sky-100 rounded p-5 text-center drop-shadow-lg">
                    <FaLaptopCode className="text-6xl mx-auto mb-3 text-sky-500" />
                    <h1 className="text-2xl mb-3 font-bold ">Developers</h1>
                    <p className="font-medium text-gray-600">How They Benefit: Developers can streamline their project tasks, manage sprints, and collaborate with team members seamlessly. </p>
                </div>
                <div className="bg-sky-100 rounded p-5 text-center shadow-lg">
                    <FaAcquisitionsIncorporated className="text-6xl mx-auto mb-3 text-sky-500" />
                    <h1 className="text-2xl mb-3 font-bold ">Corporate Professionals</h1>
                    <p className="font-medium text-gray-600">Corporate professionals can enhance their time management and organization skills. From project managers coordinating tasks to executives overseeing deadlines </p>
                </div>
                <div className="bg-sky-100 rounded p-5 text-center shadow-lg">
                    <FaUserDoctor className="text-6xl mx-auto mb-3 text-sky-500" />
                    <h1 className="text-2xl mb-3 font-bold ">Doctors</h1>
                    <p className="font-medium text-gray-600">How They Benefit: Developers can streamline their project tasks, manage sprints, and collaborate with team members seamlessly. </p>
                </div>
                <div className="bg-sky-100 rounded p-5 text-center shadow-lg">
                    <HiBuildingOffice className="text-6xl mx-auto mb-3 text-sky-500" />
                    <h1 className="text-2xl mb-3 font-bold ">Small Business Owners</h1>
                    <p className="font-medium text-gray-600">Entrepreneurs and small business owners can manage their business tasks effectively. From planning marketing campaigns to overseeing daily operations, TaskFlow Pro  .  </p>
                </div>
                <div className="bg-sky-100 rounded p-5 text-center shadow-lg">
                    <FaBusinessTime className="text-6xl mx-auto mb-3 text-sky-500" />
                    <h1 className="text-2xl mb-3 font-bold ">Bankers</h1>
                    <p className="font-medium text-gray-600">How They Benefit: Financial professionals deal with numerous tasks and deadlines. TaskFlow Pro provides a centralized hub to manage financial .  </p>
                </div>
                <div className="bg-sky-100 rounded p-5 text-center shadow-lg">
                    <PiStudentFill className="text-6xl mx-auto mb-3 text-sky-500" />
                    <h1 className="text-2xl mb-3 font-bold ">Students and Educators</h1>
                    <p className="font-medium text-gray-600">TaskFlow Pro aids students in organizing assignments, projects, and study schedules. Educators can also use it to manage lesson plans .  </p>
                </div>
            </div>
        </div>
    );
};

export default UsePeopleType;