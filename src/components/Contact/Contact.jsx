import React, { useState } from 'react';
import styles from './Contact.module.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = `mailto:salanbhattarai5@gmail.com?subject=Message from ${name}&body=${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1>Let's talk</h1>
        <p>
          I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
        </p>
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <img src="/assets/contact/gmail.png" alt="Email" />
            <span>salanbhattarai5@gmail.com</span>
          </div>
          <div className={styles.infoItem}>
            <img src="/assets/contact/linkedin.png" alt="LinkedIn" />
            <span>Salan Bhattarai
            </span>
          </div>
          <div className={styles.infoItem}>
            <img src="/assets/contact/github.png" alt="github" />
            <span>salan223</span>
          </div>
          <br />
          <div>
            <p>Design and Developed by Salan Bhattarai © 2024</p>
          </div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <h1>Get in touch</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Write your message here</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>Send</button>
        </form>
      </div>
      
    </div>
    
  );
};
