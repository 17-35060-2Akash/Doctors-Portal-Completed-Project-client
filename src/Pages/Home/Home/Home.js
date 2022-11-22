import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Experimental from '../Experimental/Experimental';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import ServicesHome from '../ServicesHome/ServicesHome';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <ServicesHome></ServicesHome>
            <Experimental></Experimental>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;