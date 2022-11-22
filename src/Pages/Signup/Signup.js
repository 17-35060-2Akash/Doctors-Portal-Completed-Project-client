import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import SocialLogin from '../Login/SocialLogin';
import useToken from '../../hooks/useToken';

const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signupError, setSignupError] = useState('');

    const [createdUserEmail, setCreatedUserEmail] = useState('');

    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const { createUser, updateUser } = useContext(AuthContext);

    const handleSignUp = data => {
        // console.log(data);
        setSignupError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // toast.success(`Welcome ${user?.displayName}`);
                toast.success(`Welcome!`);


                const profile = {
                    displayName: data.name
                }
                updateUser(profile)
                    .then(() => {

                        saveUser(data.name, data.email);

                    })
                    .catch(error => console.error(error))

            })
            .catch(error => {
                console.error(error)
                setSignupError(error.message)
            })

    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://doctors-portal-server-flame-pi.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCreatedUserEmail(email);
            })
    };




    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-lg rounded-xl'>
                <h2 className='text-xl text-center font-semibold mb-9'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label font-medium"><span className="label-text">Name</span></label>
                        <input type="text" {...register("name",
                            { required: "Name is required", maxLength: { value: 20, message: "Name can't be more than 30 chracters." } })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-error p-1'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label font-medium"><span className="label-text">Email</span></label>
                        <input type="email" {...register("email",
                            { required: 'Email is required' }
                        )} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-error p-1'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label font-medium"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password",
                            {
                                required: "Password is required", minLength: { value: 6, message: "Password has to be minimum 6 characters long" },
                                pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])/, message: "Password Must be strong" }
                            }
                        )} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-error p-1'>{errors.password.message}</p>}
                    </div>

                    <input type="submit" value="Sign Up" className='btn btn-neutral w-full mt-4' />
                    <div>
                        {
                            signupError && <p className='text-error p-1 font-medium'>{signupError}</p>
                        }
                    </div>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Signup;