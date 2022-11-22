import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const closeModal = () => {
        setDeletingDoctor(null);
    }



    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://doctors-portal-server-flame-pi.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDeleteDoctor = doctor => {
        console.log(doctor);
        fetch(`https://doctors-portal-server-flame-pi.vercel.app/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Doctor ${doctor.name} deleted successfully!`)
                }
                else {
                    toast.error('Something went wrong!');
                }
            })
    };


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-2xl font-medium my-5 ml-1'>Manage Doctors: {doctors.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>AVATAR</th>
                            <th>NAME</th>
                            <th>Email</th>
                            <th>SPECIALITY</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, idx) => <tr
                                key={doctor._id}>
                                <th>{idx}</th>
                                <td>
                                    <div className="w-12">
                                        <img src={doctor.img} alt="Avatar Tailwind CSS Component" className='rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' />
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.speciality}</td>
                                <td>
                                    <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-md btn-ghost bg-rose-600 text-white">Delete</label>
                                </td>
                            </tr>)
                        }




                    </tbody>
                </table>
                {
                    deletingDoctor && <ConfirmationModal
                        title={`Are you sure you want to delete?`}
                        message={`If you want to delete ${deletingDoctor.name} 
                        note: Deletion can't be undone.`}
                        successButtonName="DELETE"
                        successAction={handleDeleteDoctor}
                        modalData={deletingDoctor}
                        closeModal={closeModal}
                    ></ConfirmationModal>
                }
            </div>


        </div>
    );
};

export default ManageDoctors;