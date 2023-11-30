import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SubmitPayment from "./SubmitPayment";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    return (
        <div>
            <Helmet>
                <title>SurveyMaster | Payment</title>
            </Helmet>
            <SectionTitle heading={"Pay to Upgrade"}>
            </SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <SubmitPayment></SubmitPayment>
                </Elements>
            </div>

        </div>
    );
};

export default Payment;