import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripe_pk);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();

    // console.log(booking);
    const { treatment, price, slot, appointmentDate } = booking;

    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-3xl text-secondary font-bold py-2 mt-5'>Payment for {treatment}</h2>
            <p className="text-xl py-2">Please pay <strong>{price}$</strong> for your appointment on <strong>{appointmentDate}</strong> from
                <strong>{slot}</strong>.</p>
            <div className='w-96 my-12 mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    ></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;