import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name: treatmentName, slots, price } = treatment;
    const date = format(selectedDate, 'PP');

    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // console.log(date, slot, name, email, phone);

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
            price
        }
        console.log(booking);

        fetch('https://doctors-portal-server-flame-pi.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking Confirmed!');
                    refetch();
                }
                else {
                    setTreatment(null);
                    toast.error(data.message);
                }
            })


    };

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 mt-10'>
                        <input type="text" value={date} readOnly className="input w-full  border-4 border-gray-100 bg-base-200 font-bold" />
                        <select name='slot' className="select select-bordered w-full border-4 border-gray-100 bg-base-100">

                            {
                                slots.map((slot, idx) => <option value={slot}
                                    key={idx}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' placeholder="Your Name" defaultValue={user?.displayName} className="input w-full  border-4 border-gray-100 bg-base-100" />
                        <input type="email" name='email' placeholder="Email" defaultValue={user?.email} className="input w-full  border-4 border-gray-100 bg-base-100" disabled />
                        <input type="text" name='phone' placeholder="Phone Number" className="input w-full  border-4 border-gray-100 bg-base-100" />
                        <br />
                        <input className='btn w-full text-secondary font-bold' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;