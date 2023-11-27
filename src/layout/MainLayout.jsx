import { Outlet } from "react-router-dom";
import NavBar from "../pages/SharedPage/NavBar";
import Footer from "../pages/SharedPage/Footer";


const MainLayout = () => {
    
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;