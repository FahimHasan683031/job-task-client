import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <div className="carousel  mb-32 w-full z-0 relative">
            <div id="slide1" className="carousel-item py-20 relative w-full bg-[url('https://assets-global.website-files.com/6058ba87eec5713e5f80752a/6282f519081a58feae9b1fc4_Task-management-vs-project-management.jpeg')] bg-cover  object-contain">
                <div className="absolute top-0 left-0 w-full h-full bg-[#030303c4] z-0"></div>
                <div className=" z-30 relative items-center max-w-5xl pt-10 mx-auto px-6">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-sky-500 leading-[58px]">Welcome!!!</h1>
                        <h1 className="text-5xl font-bold text-white leading-[58px]">Empower Your Day with <br /> Seamless Task Management</h1>

                        
                        <p className="text-gray-200 max-w-2xl my-5">Welcome to TaskFlow Pro, where productivity meets simplicity. Organize your day effortlessly with our intuitive task management platform. From prioritizing to collaborating, we've got your tasks covered. Elevate your productivity to new heights. Join TaskFlow Pro today and experience a smarter way to work</p>

                        <Link to='dashboard' className="px-5 mt-4 py-2 text-white font-medium rounded-sm bg-sky-600 ">Explore</Link>
                    </div>
                    
                </div>
                
            </div>

            
        </div>
    );
};

export default Banner;