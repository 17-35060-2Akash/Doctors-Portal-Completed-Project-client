import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people1,

        },
        {
            _id: 2,
            name: 'Susan Mara',
            review: 'We had a very pleasant experience with Dr. Meena and her staff. My daughter was very anxious about the appointment and any procedure, but Dr. Meena was very patient with her.',
            location: 'Bilford',
            img: people2,

        },
        {
            _id: 3,
            name: 'Aliyah Jordan',
            review: 'I desperately needed dentures and I am on MassHealth. A cloud hangs over the people who are on MassHealth and the providers of their services. There are no words to describe how WONDERFUL my experience',
            location: 'Sanfrancisco',
            img: people3,

        },
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div className='text-start mb-16'>
                    <p className='text-xl font-bold text-secondary '>Testimonial</p>
                    <h1 className='text-5xl'>What Our Patients Says</h1>
                </div>
                <figure>
                    <img src={quote} alt="" className='w-24 lg:w-48' />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        datareview={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;