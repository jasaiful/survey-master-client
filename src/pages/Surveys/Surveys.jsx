import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";

const Surveys = () => {
    const [surveysData, setSurveysData] = useState([]);
    const [filteredSurveys, setFilteredSurveys] = useState([]);
    const [filter, setFilter] = useState({
        title: "",
        category: "",
        totalVoted: "",
    });

    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const fetchSurveys = async () => {
            try {
                const response = await axiosPublic.get('/surveys');
                setSurveysData(response.data);
                setFilteredSurveys(response.data);
            } catch (error) {
                console.error('Error fetching surveys:', error);
            }
        };
        fetchSurveys();
    }, [axiosPublic]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter({ ...filter, [name]: value });
    };

    useEffect(() => {
        const filtered = surveysData.filter((survey) => {
            const titleMatch = survey.title.toLowerCase().includes(filter.title.toLowerCase());
            const categoryMatch = survey.category.toLowerCase().includes(filter.category.toLowerCase());
            const totalVotedMatch = filter.totalVoted ? survey.totalVoted <= parseInt(filter.totalVoted) : true;

            return titleMatch && categoryMatch && totalVotedMatch;
        });
        setFilteredSurveys(filtered);
    }, [filter, surveysData]);

    return (
        <div className="py-20">
            <Helmet>
                <title>SurveyMaster | Surveys</title>
            </Helmet>
            <SectionTitle heading={"All Surveys"} />
            <div className="mx-10 mt-8 mb-4">
                <label className="mr-4 text-lg font-semibold">
                    Search by Title:
                    <input
                        type="text"
                        placeholder="search by title"
                        name="title"
                        value={filter.title}
                        className="ml-2 border font-normal rounded-lg px-5"
                        onChange={handleFilterChange}
                    />
                </label>
                <label className="mr-4 text-lg font-semibold">
                    Search by Category:
                    <input
                        type="text"
                        placeholder="search by category"
                        name="category"
                        value={filter.category}
                        className="ml-2 border font-normal rounded-lg px-5"
                        onChange={handleFilterChange}
                    />
                </label>
                <label className="mr-4 text-lg font-semibold">
                    Search by Vote:
                    <input
                        type="number"
                        placeholder="search by vote"
                        name="totalVoted"
                        value={filter.totalVoted}
                        className="ml-2 px-1 border font-normal rounded-lg"
                        onChange={handleFilterChange}
                    />
                </label>
            </div>
            <div className="grid gap-5 mx-10 grid-cols-3">
                {filteredSurveys.map((survey) => (
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

export default Surveys;
