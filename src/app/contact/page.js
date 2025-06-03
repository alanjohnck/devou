"use client";
import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    submitted: false,
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ ...formState, submitted: true });

    const { name, email, message } = formState;
    const calUrl = `https://cal.com/devou.in/30min?name=${encodeURIComponent(
      name
    )}&email=${encodeURIComponent(email)}&notes=${encodeURIComponent(message)}`;

    window.location.href = calUrl;
  };

  return (
    <section
      id="contact"
      className="h-[150vh] md:h-screen w-screen flex flex-col items-center gap-6  text-black font-bold"
    >
      <div className="max-w-6xl h-1/4 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl mb-2">Ready To Start Your Project</h1>
        <p className="text-lg font-normal max-w-xl">
          Contact us today to discuss how we can help bring your vision to life
          with our expertise in app and web development.
        </p>
      </div>

      <div className="w-full h-3/4 py-4 flex flex-col md:flex-row justify-center items-center ">
        {/* LEFT: Form */}
        <div
          style={{
            backgroundImage:
              "linear-gradient(45deg, #103240 0%, #114053 41%, #004F6F 100%)",
          }}
          className="w-full md:w-1/2 h-full rounded-0 md:rounded-r-3xl p-8 flex flex-col justify-center items-start md:items-end gap-4 text-white"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full md:w-1/2">
            <label className="text-lg">Name</label>
            <input
              type="text"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="rounded-md p-2 text-black bg-[#CBF0FF]"
              required
            />

            <label className="text-lg">Email</label>
            <input
              type="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="rounded-md p-2 text-black bg-[#CBF0FF]"
              required
            />

            <label className="text-lg">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formState.message}
              onChange={handleChange}
              className="rounded-md p-2 text-black resize-none bg-[#CBF0FF]"
              required
            ></textarea>

            <button
              type="submit"
              className="w-3/4 md:w-1/4 text-black font-semibold px-4 py-2 mt-2 rounded-md bg-[#CBF0FF] hover:bg-gray-200 transition"
            >
              Connect
            </button>
          </form>
        </div>

        {/* RIGHT: Contact Details */}
        <div className="w-full md:w-1/2 h-3/4 bg-[#69C1E4]  p-8 flex flex-col justify-center gap-6 text-black text-lg">
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6" />
            <span>686795864</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6" />
            <span>info@devou.in</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6" />
            <span>Kochi,Ernakulam</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
