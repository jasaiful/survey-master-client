
import useAuth from '../../../hooks/useAuth';

const AdminHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2 className="text-3xl">Hi, <span className='font-bold'>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </span>
            </h2>
        </div>
    );
};

export default AdminHome;