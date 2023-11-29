import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";
import 'survey-core/defaultV2.min.css';
import useAxiosPublic from "../../hooks/useAxiosPublic";



const SurveyDetails = () => {
    const [surveysData, setSurveysData] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchSurveys = async () => {
            try {
                const response = await axiosPublic.get('/surveys');
                setSurveysData(response.data);
            } catch (error) {
                console.error('Error fetching surveys:', error);
            }
        };
        fetchSurveys();
    }, [axiosPublic]);

    return (
        <div className="py-20">
            <Helmet>
                <title>SurveyMaster | Survey Details</title>
            </Helmet>
            <SectionTitle heading={"Survey Details"}>
            </SectionTitle>
            <div className="grid gap-5 mx-10 grid-cols-2">
                {surveysData.map(survey => (
                    <div key={survey._id} className="p-4 border border-r-4 border-b-4 border-pink-600 rounded-md shadow-md bg-white">
                        <h3 className="text-xl font-semibold mb-2">{survey.title}</h3>
                        <p className="text-gray-500 mb-4">{survey.category}</p>
                        <p className="mb-4">{survey.description}</p>
                        <div className="mb-4">
                            Options: {survey.options.map((option, index) => (
                                <span key={index} className="mr-2">{option.optionText}</span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="mr-2">Likes: {survey.likes}</span>
                                <span className="mr-2">Dislikes: {survey.dislikes}</span>
                            </div>
                            <div>
                                Total Voted (Poll): {survey.totalVoted}
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-4">Timestamp: {new Date(survey.timestamp).toLocaleString()}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default SurveyDetails;