"use client";
import React, { useState } from "react";
import styles from '@/style/contact.module.css'; // Import the CSS Module

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate email submission by logging the data
    console.log("Submitted Data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
    // Reset the form fields
    setEmail("");
    setSubject("");
    setName("");
    setMessage("");
    setSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.heading}>Contact Me</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`${styles.input}`}
              required
            />
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${styles.input}`}
              required
            />
            <label htmlFor="subject" className={styles.label}>
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={`${styles.input}`}
              required
            />
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${styles.textarea}`}
              required
            ></textarea>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
        ) : (
          <p className={styles.successMessage}>
            Thank you for your message! We will get back to you soon.
          </p>
        )}
      </div>
    </div>
  );
}
