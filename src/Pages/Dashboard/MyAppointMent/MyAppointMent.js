import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { useQuery } from "@tanstack/react-query";

const MyAppointMent = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = res.json();
      return data;
    },
  });

  return (
    <div>
      <h3 className="text-3xl p-3">My Appointment</h3>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>TreatMent</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, idx) => (
              <tr>
                <th>{idx + 1}</th>
                <th>{booking.patient}</th>
                <th>{booking.treatMent}</th>
                <th>{booking.appointmentDate}</th>
                <th>{booking.slot}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointMent;
