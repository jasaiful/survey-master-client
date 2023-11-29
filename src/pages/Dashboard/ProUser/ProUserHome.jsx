import useAuth from "../../../hooks/useAuth";


const ProUserHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h3 className="text-3xl text-pink-600">This is Pro User</h3>
            <h2 className="text-3xl">Hi, Welcome! <span className='font-bold'>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </span>
            </h2>
        </div>
    );
};

export default ProUserHome;