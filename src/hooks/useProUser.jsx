import { useState, useEffect } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useProUser = () => {
    const [isProUser, setIsProUser] = useState(false);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        const fetchProUserStatus = async () => {
            try {
                const response = await axiosSecure.get("/user/pro-status"); 
                setIsProUser(response.data.isProUser);
            } catch (error) {
                console.error("Error fetching pro-user status:", error);
            }
        };

        fetchProUserStatus();
    }, [axiosSecure]);

    return [isProUser];
};

export default useProUser;
