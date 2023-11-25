import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logo from '../../../public/logo.png'


const Footer = () => {

    return (
        <div className="bg-yellow-50 rounded-xl">
            <footer className="footer mt-5 py-5 footer-center md:flex">
                <div className="md:w-1/2">
                    <Link to='/'><img className="rounded-xl" src={logo} alt="" /></Link>
                    <header className="text-2xl font-bold">SurveyMaster Pro</header>
                    <p className="italic">Providing reliable job placement services since 2019</p>
                    <p>
                        House: 48, Road: 11/A, Dhanmondi, Dhaka-1209
                    </p>
                    <br />
                </div>
                <div className="md:w-1/2 bg-base-200 rounded-xl p-10">
                    <h3 className="text-2xl font-semibold border-b-2 mb-5">Social Media Links:</h3>
                    <div className="grid text-4xl grid-flow-col gap-4">
                        <Link><FaFacebook className="text-blue-900"></FaFacebook></Link>
                        <Link><FaLinkedin className="text-blue-800"></FaLinkedin></Link>
                        <Link><FaTwitter className="text-blue-500"></FaTwitter></Link>
                        <Link><FaYoutube className="text-red-500"></FaYoutube></Link>
                    </div>
                </div>
            </footer>
            <p className="text-center py-1 bg-base-200">Copyright © 2019 - All right reserved</p>

        </div>
    );
};

export default Footer;


