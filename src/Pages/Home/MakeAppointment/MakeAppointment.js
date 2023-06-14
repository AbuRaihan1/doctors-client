import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
const MakeAppointment = () => {
  return (
    <section style={{ background: `url(${appointment})` }}>
      <div className="py-20">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row space-x-6">
            <img
              src={doctor}
              className="max-w-md lg:w-1/2 rounded w-full -mt-44 hidden md:block "
              alt="babyImg"
            />
            <div>
              <p className="text-secondary font-bold">APPOINTMENT</p>
              <h1 className="text-5xl font-bold text-white">
                Make an appointment Today
              </h1>
              <p className="py-6 text-white">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page.
              </p>
              <button className="btn primary-button">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
