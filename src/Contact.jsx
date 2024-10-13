import React, { useState } from 'react';
import './Contact.css';  // Importing the CSS for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    alert(`Thank you ${formData.name}, we will get back to you soon!`);
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="projectDetails"
            placeholder="Tell us about your project"
            value={formData.projectDetails}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
