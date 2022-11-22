import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots, price } = option;
    return (
        <div className="card shadow-xl">
            <div className="card-body mx-auto my-10">
                <p className="text-2xl font-bold text-secondary text-center">{name}</p>
                <p className='text-lg text-center font-semibold'>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p className='text-lg text-center font-semibold'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <p className='text-lg text-center font-semibold '>Price: <span className='text-rose-600'>${price}</span></p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary"
                        onClick={() => setTreatment(option)}
                    >
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;