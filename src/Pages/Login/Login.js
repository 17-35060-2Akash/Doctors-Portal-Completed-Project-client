import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast'
import SocialLogin from './SocialLogin';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');
    // const [userEmail, setUserEmail] = useState(null);

    const { signIn, resetPassword } = useContext(AuthContext);

    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }


    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }

    /*  const handleEmailOnChange = event => {
         let email = event.target.value;
         setUserEmail(email);
         // console.log(email);
 
     }; */


    /*     const handleSendResetEmail = () => {
            const modalEmail = document.getElementById('resetemail').value;
            // console.log(modalEmail);
            setUserEmail(modalEmail);
    
            resetPassword(userEmail)
                .then(() => {
                    toast.success(`Reset email sent to ${userEmail}`);
                    setUserEmail(null);
                })
                .catch(error => {
                    console.error(error);
                    toast.error('Something went wrong');
                })
        }; */

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-lg rounded-xl'>
                <h2 className='text-xl text-center font-semibold mb-9'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)} className=''>

                    <div className="form-control w-full max-w-xs">
                        <label className="label font-medium"><span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email", { required: "Email Address is required", maxLength: { value: 30, message: "Email Address can't be more than 20 characters" } })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-error font-semibold p-2' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label font-medium"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: 'Password Must be at least 6 characters' }, maxLength: 20 })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-error font-semibold p-2' role="alert">{errors.password?.message}</p>}
                        <label className="label"> <span className="label-text text-blue-600 hover:text-secondary font-medium">Forget Password?</span></label>

                        {/*  <label htmlFor="reset-modal" className="label"
                            onClick={() => {
                                if (userEmail === null) {
                                    toast.error('First try to login please! Enter your email');
                                }
                            }}
                        >
                            <span className="label-text text-blue-600 hover:text-secondary font-medium">Forgot Password?</span>
                        </label> */}

                    </div>

                    <input type="submit" value="Login" className='btn btn-neutral w-full mt-4' />
                    <div>
                        {
                            loginError && <p className='text-error p-1 font-medium'>{loginError}</p>
                        }
                    </div>
                </form>
                <SocialLogin></SocialLogin>
            </div>
            {/* reset modal  */}
            {
                /*  userEmail && <React.Fragment>
                     <input type="checkbox" id="reset-modal" className="modal-toggle" />
                     <div className="modal">
                         <div className="modal-box relative">
                             <label htmlFor="reset-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                             <h3 className="text-lg text-secondary font-semibold">Do you want to send us the 'Reset Password Email' to this address?</h3>
                             <input type="text" id='resetemail' name='resetemail' placeholder="Your Email" defaultValue={userEmail} className="input w-full border-2 border-gray-400 my-6" />
                             <br />
                             <div className='text-end'>
                                 <button className='btn btn-secondary text-white font-semibold'
                                 // disabled={resetEmail.length === 0}
                                 // onClick={handleSendResetEmail}
                                 >Send Email</button>
                             </div>
                         </div>
                     </div>
                 </React.Fragment> */

            }

        </div>
    );
};

export default Login;