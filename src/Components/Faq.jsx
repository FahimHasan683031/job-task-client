
const Faq = () => {
    return (
        <div>
            <h1 className="text-2xl md:text-3xl font-bold text-sky-600 text-center  mb-3"> FAQ </h1>
            <p className=" text-center text-sm text-slate-500 mb-10 font-medium leading-7  ">Comon frequently asked question &   their <br /> answer given below.  </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-screen-xl items-center mx-auto px-6 mb-32">
                <div className="join join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl text-sky-600 font-medium">
                        How does Task Manager Pro work?
                        </div>
                        <div className="collapse-content">
                            <p className="text-[15px] leading-7 px-5 font-medium text-gray-600">TaskFlow Pro provides a user-friendly interface where you can create, manage, and track tasks. You can prioritize tasks, set due dates, collaborate with team members, and monitor progress, all in one centralized platform.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4"  />
                        <div className="collapse-title text-xl text-sky-600 font-medium">
                        Can I access Task Manager on different devices?
                        </div>
                        <div className="collapse-content">
                            <p className="text-[15px] leading-7 px-5 font-medium text-gray-600">Absolutely! TaskFlow Pro is accessible from any device with an internet connection. Whether you're on your desktop, laptop, tablet, or smartphone, you can manage your tasks seamlessly.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4"  />
                        <div className="collapse-title text-xl text-sky-600 font-medium">
                        How secure is my data on Task Manager?
                        </div>
                        <div className="collapse-content">
                            <p className="text-[15px] leading-7 px-5 font-medium text-gray-600"> Security is our top priority. TaskFlow Pro employs robust encryption protocols to ensure the confidentiality and integrity of your data. We regularly update our security measures to provide a safe environment for your information.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4"  />
                        <div className="collapse-title text-xl text-sky-600 font-medium">
                        What support options are available if I encounter issues?
                        </div>
                        <div className="collapse-content">
                            <p className="text-[15px] leading-7 px-5 font-medium text-gray-600">We have a dedicated support team ready to assist you. You can reach out to us through our support portal, and we also provide comprehensive documentation to guide you through common tasks and troubleshooting.</p>
                        </div>
                    </div>

                    
                    
                </div>
                <img src={'https://i.ibb.co/bRD9ywc/undraw-pending-approval-xuu9.png" alt="undraw-Questions-re-1fy7-1'} alt="" />
            </div>

        </div>
    );
};

export default Faq;