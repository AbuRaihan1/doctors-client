import React, { useState } from "react";

import { format } from "date-fns";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AppointmentItems from "../AppointmentItems/AppointmentItems";

const Appointment = () => {
  const [selectedDay, setSelectedDay] = useState(new Date());

  return (
    <div>
      <AppointmentBanner
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <AppointmentItems
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
    </div>
  );
};

export default Appointment;
