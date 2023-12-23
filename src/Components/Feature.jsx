

const Feature = () => {
    return (
        <div className="grid grid-cols-1 mb-32 lg:grid-cols-2 bg-sky-100">
            <div className="h-full">
                <img className="h-full w-full " src={'https://i.ibb.co/qmzvPHK/home-calculator-02.jpg" alt="home-calculator-02'} alt="" />
            </div>
            <div className="p-8 md:p-28">
                <h1 className="text-2xl md:text-3xl font-bold text-sky-600">We Are Professional & Thoughful HandyMan</h1>
                <p className="my-5 leading-7 md:leading-7 font-medium text-gray-500 text-sm md:text-base ">Every home owner has a list of renovation, home repair, or home improvement projects he or she needs done — both interior and exterior. Sometimes that list can get quite long, too! The bathrooms that needs updating. The garbage disposal that’s on the fritz. The basement that needs drywall repairs. But with today’s busy lifestyles, who has the time or the patience to do it all yourself? Let us help your home run more smoothly with a wide range of affordable repair, improvement and remodel services.</p>
                <button className="px-3 md:px-5 py-2 md:py-3 bg-sky-600 text-sm md:text-base text-white font-medium">Find Out More.</button>
            </div>
        </div>
    );
};

export default Feature;