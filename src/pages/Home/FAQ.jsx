import SectionTitle from "../../components/SectionTitle";


const FAQ = () => {
    return (
        <div className="mt-10 bg-base-200 rounded-lg w-full">
            <SectionTitle heading={"FAQ"} subHeading={"clarify your doubt"}/>
            <div className="hero rounded-xl">
                <div className="hero-content px-12 flex-col md:flex-row justify-around py-12">
                    <div className="w-full md:w-2/3">
                    <img className="rounded-xl" src={'https://i.ibb.co/F5zD7sr/image.png'} />
                    </div>
                    <div className="space-y-5">
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                                How can I create a survey using SurveyMaster Pro?
                            </div>
                            <div className="collapse-content">
                                <p>SurveyMaster Pro offers a simple and intuitive survey creation interface. Navigate to your dashboard, click on the Create Survey button, and follow the guided steps to craft your survey with various question types.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                What types of surveys can I create with SurveyMaster Pro?
                            </div>
                            <div className="collapse-content">
                                <p>SurveyMaster Pro provides flexibility in creating different types of surveys, including multiple-choice, rating scales, open-ended questions, and more, allowing you to design surveys tailored to your needs.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                Is there a limit to the number of participants or responses for a survey?
                            </div>
                            <div className="collapse-content">
                                <p>With SurveyMaster Pro, you can reach an unlimited number of participants and collect numerous responses. There are no predefined limits, ensuring scalability for both small-scale and large-scale surveys.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                Can I analyze survey results in SurveyMaster Pro?
                            </div>
                            <div className="collapse-content">
                                <p>Yes, SurveyMaster Pro offers robust analytics tools. Once your survey is complete, you can access detailed insights and visualize responses through charts and graphs, enabling comprehensive result analysis.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                Is my data secure on SurveyMaster Pro?
                            </div>
                            <div className="collapse-content">
                                <p>Security is a priority at SurveyMaster Pro. We employ industry-standard encryption methods and follow strict data protection protocols to ensure the confidentiality and integrity of your survey data.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FAQ;