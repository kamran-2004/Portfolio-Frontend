import React from 'react'
import { useState } from 'react';

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add logic to send the data to your backend or email service
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <section id="contact-me" className="bg-gray-100 py-12 px-6">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Contact Me
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 space-y-4"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-300 focus:outline-none"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
  )
}

export default Contact
