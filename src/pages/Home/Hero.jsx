import { Link } from "react-router-dom";
import banner from "../../assets/banner.png"

const Hero = () => {
    return (
        <div className="w-full">
            <div className="relative hero w-full">
                <img className="w-full max-h-screen" src={banner} alt="img" />
                <div className="absolute rounded-xl flex items-center justify-end h-full hero-overlay bg-opacity-60 ">
                    <div className="text-white space text-right pr-6">
                    <h1 className="text-4xl font-extrabold mb-4">SurveyMaster Pro</h1>
                    <p className="text-lg mb-6">Empowering surveys and insights like never before!</p>
                    <Link> <button className="btn btn-secondary">Explore</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;