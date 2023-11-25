import SectionTitle from "../../components/SectionTitle";


const HowItWorks = () => {
    return (
        <div className="bg-base-200">
            <SectionTitle heading={"How It Works"} subHeading={"lets see your process"}>
            </SectionTitle>

            <div className="hero rounded-xl">
                <div className="hero-content px-12 flex-col justify-between py-12 lg:flex-row-reverse">
                    <div className="md:w-full">
                        <img className="rounded-xl" src="https://i.ibb.co/THx3V0B/image.png"/>
                    </div>
                    <div className="space-y-5">
                        <div className="mt-6 grid gap-8 lg:grid-cols-3">
                            <div className=" card w-full bg-white text-center p-5 shadow-xl flex flex-col items-center">
                                <div className="rounded-full bg-blue-900 text-white flex items-center font-bold text-xl justify-center w-16 h-16">
                                    1
                                </div>
                                <h3 className="text-xl text-pink-600 font-semibold mt-4">Create Surveys</h3>
                                <p className="text-gray-600 mt-2">
                                    Effortlessly craft tailored surveys using our user-friendly interface.
                                </p>
                            </div>

                            <div className=" card w-full bg-white text-center p-5 shadow-xl flex flex-col items-center">
                                <div className="rounded-full bg-blue-900 text-white flex items-center font-bold text-xl justify-center w-16 h-16">
                                    2
                                </div>
                                <h3 className="text-xl text-pink-600 font-semibold mt-4">Share & Collect Responses</h3>
                                <p className="text-gray-600 mt-2">
                                    Share surveys with your target audience and seamlessly gather responses.
                                </p>
                            </div>
                            <div className=" card w-full bg-white text-center p-5 shadow-xl flex flex-col items-center">
                                <div className="rounded-full bg-blue-900 text-white flex items-center font-bold text-xl justify-center w-16 h-16">
                                    3
                                </div>
                                <h3 className="text-xl text-pink-600 font-semibold mt-4">Analyze Results</h3>
                                <p className="text-gray-600 mt-2">
                                    Obtain comprehensive analytics and insights from collected responses.
                                </p>
                            </div>
                            <div className=" card w-full bg-white text-center p-5 shadow-xl flex flex-col items-center">
                                <div className="rounded-full bg-blue-900 text-white flex items-center font-bold text-xl justify-center w-16 h-16">
                                    4
                                </div>
                                <h3 className="text-xl text-pink-600 font-semibold mt-4">Customize Reports</h3>
                                <p className="text-gray-600 mt-2">
                                    Tailor and generate detailed reports to suit your specific needs.
                                </p>
                            </div>
                            <div className=" card w-full bg-white text-center p-5 shadow-xl flex flex-col items-center">
                                <div className="rounded-full bg-blue-900 text-white flex items-center font-bold text-xl justify-center w-16 h-16">
                                    5
                                </div>
                                <h3 className="text-xl text-pink-600 font-semibold mt-4">Ensure Security</h3>
                                <p className="text-gray-600 mt-2">
                                    Guarantee data security and privacy throughout the survey process.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default HowItWorks;