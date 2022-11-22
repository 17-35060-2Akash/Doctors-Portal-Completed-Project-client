import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    return (
        <header>
            <div className="hero bg-image py-40 banner" style={{
                backgroundImage: `url(${bg})`
            }}>
                <div className="hero-content flex-col lg:flex-row-reverse px-3">
                    <img src={chair} alt='' className="lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='p-5 shadow-xl rounded-xl mx-auto'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}></DayPicker>
                        {/* <p className='text-center'>You have selected date: {format(selectedDate, 'PP')}</p> */}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;