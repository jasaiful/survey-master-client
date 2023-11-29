import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import SignUP from "../pages/SignUp/SignUP";
import Login from "../pages/Login/Login";
import Surveys from "../pages/Surveys/Surveys";
import Prices from "../pages/Prices/Prices";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import UserHome from '../pages/Dashboard/Users/UserHome';
import AdminHome from '../pages/Dashboard/Admins/AdminHome';
import AdminRoute from '../routes/AdminRoute';
import AllUsers from '../pages/Dashboard/Admins/AllUsers';
import SurveyDetails from "../pages/SurveyDetails/SurveyDetails";
import SurveyorHome from "../pages/Dashboard/Surveyor/SurveyorHome";
import CreateSurvey from "../pages/Dashboard/Surveyor/CreateSurvey";
import ProUserRoute from "./ProUserRoute";
import ProUserHome from "../pages/Dashboard/ProUser/ProUserHome";
import SurveyorRoute from "./SurveyorRoute";


const MainRouter = createBrowserRouter([
    
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/register",
                element: <SignUP></SignUP>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/surveys",
                element: <Surveys></Surveys>
            },
            {
                path: "/surveyDetails",
                element: <SurveyDetails></SurveyDetails>
            },
            {
                path: "/prices",
                element: <PrivateRoute><Prices></Prices></PrivateRoute>
            }
        ]
    },


    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },

            //pro-user routes
            {
                path: 'proUserHome',
                element: <ProUserRoute> <ProUserHome></ProUserHome> </ProUserRoute>
            },
           
            // surveyor routes
            {
                path: 'surveyorHome',
                element: <SurveyorRoute> <SurveyorHome></SurveyorHome> </SurveyorRoute>
            },
            {
                path: 'createSurvey',
                element: <SurveyorRoute> <CreateSurvey></CreateSurvey> </SurveyorRoute>
            },
            // admin routes
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'users',
                element: <AdminRoute> <AllUsers></AllUsers> </AdminRoute>
            }
        ]
    }
])

export default MainRouter;