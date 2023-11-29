import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle";


const Prices = () => {
    return (
        <div className="py-16 bg-base-200">
            <Helmet>
                <title>surveyMaster || PRO</title>
            </Helmet>
            <SectionTitle heading={"Want To Be PRO"} subHeading={"get ultimate services"}>
            </SectionTitle>

            <div className="hero rounded-xl">
                <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                    <div className="md:w-full">
                        <img className="rounded-xl" src="https://i.ibb.co/z5shztf/image.png" />
                    </div>
                    <div className=" border-t-8 border-t-pink-600 card w-full bg-white text-center p-5 shadow-xl space-y-5 items-center">
                        <p>3 years Pro</p>
                        <p>$ <span className="font-bold text-4xl">299</span></p>
                        <button className="btn btn-secondary">Upgrade Now!</button>
                        <p className="text-gray-600 border-b-2 mt-2">
                            able to vote surveys
                        </p>
                        <p className="text-gray-600 border-b-2 mt-2">
                            can comment on survey
                        </p>
                        <p className="text-gray-600 border-b-2 mt-2">
                            Direct links
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prices;