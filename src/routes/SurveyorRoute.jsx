import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useSurveyor from "../hooks/useSurveyor";

const SurveyorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isSurveyor, isSurveyorLoading] = useSurveyor();
    const location = useLocation();

    if (loading || isSurveyorLoading) {
        return <progress className="progress w-56"></progress>;
    }

    if (user && isSurveyor) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SurveyorRoute;
