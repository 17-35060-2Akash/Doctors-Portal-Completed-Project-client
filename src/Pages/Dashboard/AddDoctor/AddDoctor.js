import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const imagehostkey = process.env.REACT_APP_imgbb_key;

    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-flame-pi.vercel.app/appointmentSpecialty');
            const data = await res.json();
            return data;
        }
    })

    const handleAddDoctor = (data) => {
        // console.log(data.img[0]);
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imagehostkey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const imgURL = imgData.data.url;

                    const doctor = {
                        name: data.name,
                        email: data.email,
                        speciality: data.speciality,
                        img: imgURL
                    };

                    //save doctor info to the db
                    fetch('https://doctors-portal-server-flame-pi.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.acknowledged) {
                                toast.success(`Doctor ${data.name} is added succesfully`);
                                navigate('/dashboard/managedoctors');
                            }
                        })
                }
            })
    };

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-96 p-7 mx-auto my-auto'>
            <h2 className='text-2xl font-medium my-5 ml-1 text-center'>Add Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>

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
                    <label className="label font-medium"><span className="label-text">Specialty</span></label>
                    <select {...register('speciality')}
                        className="select select-bordered w-full max-w-xs">
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}>{specialty.name}</option>
                            )
                        }
                    </select>

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label font-medium"><span className="label-text">Photo</span></label>
                    <input type="file" {...register("img",
                        { required: "Photo is required" })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-error p-1'>{errors.img.message}</p>}
                </div>

                <input type="submit" value="Add Doctor" className='btn btn-neutral w-full mt-4' />
                {/* <div>
                    {
                        signupError && <p className='text-error p-1 font-medium'>{signupError}</p>
                    }
                </div> */}
            </form>
        </div>
    );
};

export default AddDoctor;