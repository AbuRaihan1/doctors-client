import { format, toDate } from "date-fns";
import { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { toast } from "react-hot-toast";

const AppointmentModal = ({
  treatMent,
  setTreatMent,
  selectedDay,
  refetch,
}) => {
  // here i'm using if treatment is null, then it will just return something, otherwise it will return error.

  const date = format(selectedDay, "PP");
  const { user } = useContext(AuthContext);
  if (!treatMent) {
    return;
  }
  const { name: treatMentName, slots } = treatMent;
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatMent: treatMentName,
      patient: name,
      slot,
      email,
      phone,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setTreatMent(null);
          toast.success("Successfully appointented");
          refetch();
        }
        else {
          toast.error(data.message);
        }
      });
  };

  return (
    // i'm using the modal daisy ui 2.52 version. and others all of code is, latest daisy ui.
    <div>
      <input type="checkbox" id="booking_modal" className="modal-toggle" />
      <dialog id="booking_modal" className="modal">
        <form onSubmit={handleBooking} method="dialog" className="modal-box">
          <label
            htmlFor="booking_modal"
            className="btn btn-sm btn-circle primary-button absolute right-4 top-4"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">{treatMentName}</h3>
          <div className="inputs mt-10">
            <input
              type="text"
              value={format(selectedDay, "PP")}
              className="input input-bordered w-full mb-4"
              disabled
            />

            <select name="slot" className="select select-bordered w-full mb-4">
              {slots?.map((slot, idx) => (
                <option key={idx} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered w-full mb-4"
              defaultValue={
                user?.displayName
                  ? user.displayName
                  : "Please login to continue"
              }
              disabled
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full mb-4"
              defaultValue={
                user?.email ? user.email : "please login to continue"
              }
              disabled
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              className="input input-bordered w-full mb-4"
            />
            <input
              type="submit"
              value="Submit"
              className="primary-button btn w-full mb-4"
            />
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default AppointmentModal;
