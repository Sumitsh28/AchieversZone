import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/website/logo.png";
import JoinWhatsappButton from "./Whatsapp";
import JoinInstaButton from "./Instagram";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",

    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, contactNumber, message } = formData;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+919517581251&text=${encodeURIComponent(
      `Name: ${name}\nContact Number: ${contactNumber}\nMessage: ${message}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      className="flex justify-center flex-col items-center bg-gray-50 mb-10 dark:bg-black"
      id="contact"
    >
      <h2
        className="md:text-5xl text-2xl font-extrabold text-primary mb-10 mt-10"
        data-aos="fade-up"
      >
        Contact Us
      </h2>
      <motion.div
        className="bg-white dark:bg-slate-900 rounded-lg shadow-lg flex md:flex-row flex-col max-w-4xl w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex md:w-1/2 rounded-l-lg p-8 justify-center items-center">
          <img src={logo} alt="Logo" className="h-[300px] w-[300px]" />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-xl font-bold mb-6 text-center text-gray-800 dark:text-white">
            Fill this to connect through WhatsApp!
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:primary focus:primary"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Contact Number
              </label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:primary focus:primary"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:primary focus:primary"
                required
              />
            </div>
            <div className="flex justify-center">
              <motion.button
                type="submit"
                className="bg-primary text-white px-3 py-2 rounded-md hover:from-green-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
      <div className="flex flex-col md:flex-row">
        <JoinWhatsappButton />
        <JoinInstaButton />
      </div>
    </div>
  );
};

export default ContactForm;
