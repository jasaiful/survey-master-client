import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle";

const CreateSurvey = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const onSubmit = async data => {
        try {

            const surveyData = {
                title: data.title,
                category: data.category,
                description: data.description,
                options: ['Yes', 'No'],
                likes: 0,
                dislikes: 0,
                timestamp: new Date().toISOString(),
            };

            // Send the survey data to the server
            const response = await axiosSecure.post('/surveys', surveyData);

            if (response.data) {
                reset();
                navigate('/dashboard');
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.title} survey created successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error("Error creating survey:", error);
        }
    };

    return (
        <div>
            <SectionTitle heading={"Create a Survey"}>
            </SectionTitle>
            <div className="ml-24">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Title */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Title *</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Survey Title"
                            {...register("title", { required: true })}
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Category */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Category *</span>
                        </label>
                        <select
                            defaultValue="default"
                            {...register("category", { required: true })}
                            className="select select-bordered w-full"
                        >
                            <option disabled value="default">
                                Select a Category
                            </option>
                            <option value="Food Preferences">Food Preferences</option>
                            <option value="Fitness Habits">Fitness Habits</option>
                            <option value="Career Development">Career Development</option>
                            <option value="Electronics Usage">Electronics Usage</option>
                            <option value="Travel Preferences">Travel Preferences</option>
                            <option value="Sustainability">Sustainability</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Learning Preferences">Learning Preferences</option>
                            <option value="Fashion Trends">Fashion Trends</option>
                            <option value="Community Engagement">Community Engagement</option>

                        </select>
                    </div>


                    {/* Description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description *</span>
                        </label>
                        <textarea
                            {...register("description", { required: true })}
                            placeholder="Description"
                            className="textarea textarea-bordered h-24"
                        />
                    </div>


                    {/* Options */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Options *</span>
                        </label>
                        <div className="flex gap-4">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    value="Yes"
                                    {...register("option")}
                                    className="radio radio-primary"
                                />
                                <span className="ml-2">Yes</span>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    value="No"
                                    {...register("option")}
                                    className="radio radio-primary"
                                />
                                <span className="ml-2">No</span>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-secondary mt-5">
                        Add Survey
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateSurvey;
