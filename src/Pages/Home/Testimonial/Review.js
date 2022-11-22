import React from 'react';

const Review = ({ datareview }) => {
    const { name, img, review, location } = datareview;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review}</p>
                <div className="card-actions items-center mt-6 mb-2">
                    <div className="avatar mr-4">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h5 className='text-lg font-bold'>{name}</h5>
                        <p className='font-semibold'>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;