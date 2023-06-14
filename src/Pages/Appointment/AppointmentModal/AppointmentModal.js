import React from "react";

const AppointmentModal = ({ treatMent }) => {
  const { name } = treatMent;
  return (
    <div>
      <dialog id="booking-modal" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </form>
      </dialog>
    </div>
  );
};

export default AppointmentModal;
