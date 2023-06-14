import React from "react";
import background from "../../assets/images/appointment.png";
const ContactUs = () => {
  return (
    <section
      style={{ background: `url(${background})` }}
      className="text-center pb-12"
    >
      <div className="contact-title py-6">
        <p className="text-secondary font-bold">Contact Us</p>
        <h2 className="text-3xl text-white">Stay connected with us</h2>
      </div>

      <div className="contact-area space-y-6">
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered input-primary bg-transparent text-white w-full max-w-sm"
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered input-primary bg-transparent text-white w-full max-w-sm"
        />{" "}
        <br />
        <textarea
          className="textarea textarea-primary max-w-sm w-full bg-transparent text-white"
          placeholder="Your message"
        ></textarea>{" "}
        <br />
        <button className="btn primary-button max-w-sm w-full">Submit</button>
      </div>
    </section>
  );
};

export default ContactUs;
