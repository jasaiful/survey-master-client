import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useSurveyor = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isSurveyor, isPending: isSurveyorLoading } = useQuery({
        queryKey: [user?.email, 'isSurveyor'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/surveyor/${user.email}`);
            console.log(res.data);
            return res.data?.surveyor;
        }
    });
    return [isSurveyor, isSurveyorLoading];
};

export default useSurveyor;
