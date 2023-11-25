import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import SignUP from "../pages/SignUp/SignUP";
import Login from "../pages/Login/Login";

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
        ]
    }
])

export default MainRouter;