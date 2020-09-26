import React, { useState } from "react";
import "./Contact.scss";

function Contact() {
  const [messageSent, setMessageSent] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setMessageSent(<p className="form__message-sent">Message Sent</p>);
    setTimeout(() => {
      setMessageSent(null);
    }, 1000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact">
      <div className="info">
        <h1 className="info__title">Contact me</h1>
        <p className="info__description">
          I am interested in freelance opportunities - especially ambitious or
          large projects. However, if you have other requests or questions,
          don’t hesitate to contact me using the form below either and I'll get
          back to you as soon as possible.
        </p>
        <form action="" className="form" onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="name"
            value={form.name}
            className="form__name"
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            value={form.email}
            className="form__email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            value={form.subject}
            className="form__subject"
            placeholder="Subject"
            onChange={handleChange}
          />
          <textarea
            row="10"
            cols="40"
            name="message"
            value={form.message}
            className="form__text-area"
            placeholder="Message"
            onChange={handleChange}
          ></textarea>
          <button id="contact" className="form__send" type="submit">
            SEND
          </button>
          {messageSent}
        </form>
      </div>
      <img
        src={require("./assets/Images/Contact.svg")}
        alt=""
        className="contact__image"
      />
    </div>
  );
}

export default Contact;
