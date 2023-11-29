import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { FaHome, FaUserEdit } from "react-icons/fa";
import useProUser from "../hooks/useProUser";
import useSurveyor from "../hooks/useSurveyor";


const Dashboard = () => {


    const [isAdmin] = useAdmin();
    const [isProUser] = useProUser();
    const [isSurveyor] = useSurveyor();

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-pink-300">
                <ul className="menu p-4">
                    {/* Admin specific links */}
                    {isAdmin && (
                        <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome /> Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUserEdit /> All Users
                                </NavLink>
                            </li>
                        </>
                    )}

                    {/* Pro user specific links */}
                    {isProUser && (
                        <>
                           <li>
                                <NavLink to="/dashboard/proUserHome">
                                    <FaHome /> Pro-User Home
                                </NavLink>
                            </li>
                        </>
                    )}
                    {/* Pro user specific links */}
                    {isSurveyor && (
                        <>
                            <li>
                                <NavLink to="/dashboard/surveyorHome">
                                    <FaHome /> Surveyor Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/createSurvey">
                                    <FaHome /> Create a Survey
                                </NavLink>
                            </li>
                        </>
                    )}

                    {/* Default user links */}
                    {!isAdmin && !isProUser && !isSurveyor && (
                        <li>
                            <NavLink to="/dashboard/userHome">
                                <FaHome /> User Home
                            </NavLink>
                        </li>
                    )}

                    {/* Shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome /> Home
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;