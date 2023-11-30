import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const SubmitPayment = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user, updateUser } = useAuth();
    const navigate = useNavigate();

    // Hardcoded price 
    const totalPrice = 299;

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
            .catch(error => {
                console.error('Error fetching client secret:', error);
            });
    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        if (!cardElement) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setError(error.message);
            return;
        }

        // Confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                },
            },
        });

        if (confirmError) {
            console.error('Payment confirmation error:', confirmError);
            return;
        }

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            
            // Update user role to "pro-user"
            try {
                await updateUser(user._id, { role: "pro-user" });
            }
            catch (error) {
                console.error('Error updating user role:', error);
            }

            // Redirect after successful payment
            navigate('/dashboard/userHome');

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Thank you for your payment',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm btn-primary my-4" type="submit">
                Pay
            </button>
            <p className="text-red-600">{error}</p>
            {transactionId && (
                <p className="text-green-600">
                    Your transaction id is successfully verified: {transactionId}
                </p>
            )}
        </form>
    );
};

export default SubmitPayment;
