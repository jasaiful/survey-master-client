import useAuth from "../../../hooks/useAuth";


const SurveyorHome = () => {

    const {user} = useAuth();

    return (
        <div>
            <h2 className="text-3xl">Hi, Welcome! <span className='font-bold'>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
                </span>
            </h2>
        </div>
    );
};

export default SurveyorHome;