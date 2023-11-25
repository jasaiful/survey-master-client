import { Helmet } from "react-helmet-async";
import Hero from "./Hero";
import FeaturedSurveys from "./FeaturedSurveys";
import LatestSurveys from "./LatestSurveys";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SurveyMaster | Home</title>
            </Helmet>
            <Hero></Hero>
            <FeaturedSurveys></FeaturedSurveys>
            <LatestSurveys></LatestSurveys>
            <HowItWorks></HowItWorks>
            <Testimonials></Testimonials>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;