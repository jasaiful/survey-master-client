import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const useAuth = () => {
    const { user, updateUser } = useContext(AuthContext);

    return {
        user,
        updateUser,
    };
};


export default useAuth;