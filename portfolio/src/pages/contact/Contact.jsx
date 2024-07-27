import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import "./contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/rupak-s-28b642240/", "_blank");
  };
  const handleGitHub = () => {
    window.open("https://github.com/Rupak02", "_blank");
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await axios.post(
        "https://rupak-portfolio.onrender.com/api/contactDetails",
        formData
      );

      setSuccess("Message Sent Successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="contact_title">LET'S GET CONNECTED!</div>
      <div className="contact_icons">
        <FontAwesomeIcon
          icon={faLinkedin}
          onClick={handleLinkedIn}
          className="contact_form_icon"
        />
        <FontAwesomeIcon
          icon={faGithub}
          onClick={handleGitHub}
          className="contact_form_icon"
        />
      </div>

      <div className="contact_container">
        <form onSubmit={handleSubmit} className="contact_form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form_field"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form_field"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            className="form_field_message"
            required
            value={formData.message}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="Submit"
            disabled={loading}
            className="submit_btn"
          />
        </form>
        {loading && <p>Sending...</p>}
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </div>
    </div>
  );
};

export default Contact;
