import { format } from "date-fns";

const AppointmentModal = ({ treatMent, setTreatMent, selectedDay }) => {
  // here i'm using if treatment is null, then it will just return something, otherwise it will return error.
  if (!treatMent) {
    return;
  }
  const { name, slots } = treatMent;
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    console.log(slot, name, email, phone);
    setTreatMent(null);
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
          <h3 className="font-bold text-lg">{name}</h3>
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
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              className="input input-bordered w-full mb-4"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
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
