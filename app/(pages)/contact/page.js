"use client";

import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  // Updated to handle both input and textarea changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isFormEmpty =
    !formData.name || !formData.email || !formData.mobile || !formData.message;

  return (
    <main className="flex flex-col max-w-xs sm:max-w-4xl mx-auto animate-flyIn gap-12">
      <p className="text-4xl sm:text-9xl font-bold text-[#2A5F48]">Contact.</p>
      <div className="flex flex-col space-y-6 items-center justify-center mb-4 md:mb-0 max-w-lg mx-auto bg-[#F4EEE6] rounded-br-[50px] rounded-tl-[50px] p-10">
        <div className="flex justify-start">
          <Image
            src={
              "https://lh3.googleusercontent.com/pw/AP1GczOhCJB7OJhlsGKEPGimGcL-_qJPMo7-EHrh6xo5TcEgH4zMFbLmHFklukNbXyA6YuntFkDF3g6C9HF-ybH8bF70HeVXU0RCrFEz7E36LzN2aTTWyhZo=w2400"
            }
            height={200}
            width={200}
          />
        </div>
        <form
          action="https://getform.io/f/jawllxdb"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 sm:p-4 border rounded-xl"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 sm:p-4 border rounded-xl"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Your Mobile Phone"
            className="w-full p-2 sm:p-4 border rounded-xl"
            value={formData.mobile}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-2 sm:p-4 border rounded-xl"
            value={formData.message}
            onChange={handleChange}
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className={`p-4 rounded-[50px] transition duration-300 ${
                isFormEmpty
                  ? "bg-gray-500 cursor-not-allowed"
                  : "rounded-full bg-[#008080] hover:bg-[#66b2b2] text-white"
              }`}
              disabled={isFormEmpty}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Contact;
