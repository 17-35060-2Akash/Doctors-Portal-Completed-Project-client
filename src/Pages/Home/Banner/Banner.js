import React from 'react';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import bg from '../../../assets/images/bg.png';
const Banner = () => {
    return (
        <div className="hero bg-image py-40 banner" style={{
            backgroundImage: `url(${bg})`
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse px-3">
                <img src={chair} alt='' className="lg:w-1/2 rounded-lg shadow-2xl" />
                <div className='p-9'>
                    <h1 className="text-5xl font-bold mb-3 leading-normal">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Getting Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;