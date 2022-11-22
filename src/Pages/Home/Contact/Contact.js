import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import appointment from '../../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section>
            <div className="hero mt-[149px]" style={{
                background: `url(${appointment})`
            }}>
                <div className="hero-content flex-col lg:flex-col my-16">
                    <div className="text-center lg:text-center mb-10">
                        <p className='text-2xl font-bold text-secondary '>Contact Us</p>
                        <h1 className='text-4xl text-white'>Stay connected with us</h1>
                    </div>
                    <form className="card -m-8">
                        <div className="card-body lg:w-[450px]">
                            <div className="form-control">
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" name='subject' placeholder="Subject" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <textarea className='rounded-lg' name="message" id="" cols="30" rows="5"></textarea>
                            </div>

                            <div className="form-control mt-6">
                                <PrimaryButton>Submit</PrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;