import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useProUser from "../hooks/useProUser";

const ProUserRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isProUser, isProUserLoading] = useProUser();
    const location = useLocation();

    if (loading || isProUserLoading) {
        return <progress className="progress w-56"></progress>;
    }

    if (user && isProUser) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProUserRoute;
