import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const ServicesHome = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high levels of fluoride onto the surface of the tooth twice a year to prevent decay. ',
            img: fluoride,
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'The most common use of tooth fillings is to fill a cavity in the tooth. But tooth fillings also can be used to repair damage to teeth caused by teeth grinding (bruxism) or to replace part of a broken tooth. ',
            img: cavity,
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Everyone notices a bright, white, glowing smile and notices how confident you feel when you have that beautiful smile. That’s why we utilize long-lasting Teeth Whitening procedure. We want you to glow with pride and confidence. ',
            img: whitening,
        },
    ]
    return (
        <div className='mb-36'>
            <div className='text-center mb-16'>
                <p className='text-xl font-bold text-secondary uppercase'>Our Services</p>
                <h1 className='text-4xl'>Services We Provide</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mb-32 mx-auto'>
                {
                    servicesData.map(service => <ServiceCard
                        key={service.id}
                        service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default ServicesHome;