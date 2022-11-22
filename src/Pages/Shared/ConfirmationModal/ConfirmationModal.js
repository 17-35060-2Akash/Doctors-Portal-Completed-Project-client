import React from 'react';

const ConfirmationModal = ({ title, message, closeModal, modalData, successAction, successButtonName }) => {
    return (
        <div>


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <label htmlFor="confirmation-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className="btn btn-ghost bg-red-600 text-lg text-white">{successButtonName}</label>
                        <button onClick={closeModal} className='btn btn-outline text-lg '>cancel</button>
                    </div>
                </label>
            </label>
        </div>
    );
};

export default ConfirmationModal;