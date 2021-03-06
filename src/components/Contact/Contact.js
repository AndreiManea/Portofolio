import React, { useState } from "react";
import "./Contact.scss";
import { useFormik } from "formik";
import emailjs from "emailjs-com";
import * as Yup from "yup";

function Contact() {
  const [messageSent, setMessageSent] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name field required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email field required"),
    subject: Yup.string().required("Subject field required"),
    message: Yup.string()
      .min(30, "Message should be atleast 30 characters")
      .required("Message field required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values) => {
      setMessageSent(
        <p className="form__message-sent">
          Message Sent, thank you for your interest :)
        </p>
      );
      setTimeout(() => {
        setMessageSent(null);
      }, 1500);
      emailjs.send(serviceId, templateId, values, userId).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
      formik.resetForm();
    },
    validationSchema,
  });

  const serviceId = "service_997d53r";
  const templateId = "template_hcdo0oe";
  const userId = "user_yKAWvujYWjBNocDgFstNW";

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
        <form action="" className="form" onSubmit={formik.handleSubmit}>
          <div className="form__container">
            <div className="form__control">
              <input
                type="text"
                name="name"
                value={formik.values.name}
                className="form__name"
                placeholder="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p
                className={
                  formik.touched.name && formik.errors.name
                    ? "form__error--show"
                    : "form__error"
                }
              >
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : "."}
              </p>
            </div>
            <div className="form__control form__control--email">
              <input
                type="email"
                name="email"
                value={formik.values.email}
                className="form__email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p
                className={
                  formik.touched.email && formik.errors.email
                    ? "form__error--show"
                    : "form__error"
                }
              >
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : "."}
              </p>
            </div>
          </div>

          <input
            type="text"
            name="subject"
            value={formik.values.subject}
            className="form__subject"
            placeholder="Subject"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <p
            className={
              formik.touched.subject && formik.errors.subject
                ? "form__error--show"
                : "form__error"
            }
          >
            {formik.touched.subject && formik.errors.subject
              ? formik.errors.subject
              : "."}
          </p>

          <textarea
            row="10"
            cols="40"
            name="message"
            value={formik.values.message}
            className="form__text-area"
            placeholder="Message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          <p
            className={
              formik.touched.message && formik.errors.message
                ? "form__error--show"
                : "form__error"
            }
          >
            {formik.touched.message && formik.errors.message
              ? formik.errors.message
              : "."}
          </p>
          <button id="contact" className="form__send" type="submit">
            SEND
          </button>
          {messageSent}
        </form>
      </div>
      <div className="contact__image--wrapper">
        <div alt="" className="contact__image"></div>
      </div>
    </div>
  );
}

export default Contact;
