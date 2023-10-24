import React, { useState } from 'react';
import './Contact.css'; // Import your CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your logic here to handle the form submission
    // For example, sending the form data to a server or displaying a success message.
    // This is just a basic example.
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="contact-wrapper">
        <div className="contact-container">
        <h2 className="contact-heading">Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-input"
            />
            </div>
            <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-input"
            />
            </div>
            <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                required
                className="form-input"
            ></textarea>
            </div>
            <button type="submit" className="form-button">Submit</button>
        </form>
        </div>
    </div>
  );
};

export default Contact;