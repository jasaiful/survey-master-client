import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const LatestSurveys = () => {
    const [surveysData, setSurveysData] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchSurveys = async () => {
            try {
                const response = await axiosPublic.get('/surveys');
                const surveysWithValidTimestamp = response.data.map(survey => ({
                    ...survey,
                    timestamp: new Date(survey.timestamp).getTime()
                }));
                const sortedSurveys = surveysWithValidTimestamp.sort((a, b) => b.timestamp - a.timestamp);
                const latestSixSurveys = sortedSurveys.slice(0, 6);
                setSurveysData(latestSixSurveys);
            } catch (error) {
                console.error('Error fetching surveys:', error);
            }
        };
        fetchSurveys();
    }, [axiosPublic]);


    return (
        <div>
            <SectionTitle heading={"Latest Surveys"} subHeading={"see our recent surveys"} />

            <div className="grid gap-5 mx-10 grid-cols-3">
                {surveysData.map(survey => (
                    <div key={survey._id} className="p-4 border border-r-4 border-b-4 border-pink-600 rounded-md shadow-md bg-white">
                        <h3 className="text-xl font-semibold mb-2">{survey.title}</h3>
                        <p className="text-gray-500 mb-4">{survey.category}</p>
                        <p className="mb-4">{survey.description}</p>
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

export default LatestSurveys;
