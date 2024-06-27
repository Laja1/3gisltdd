"use client";
import React, { useRef, useState } from 'react';
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from '@emailjs/browser';
import { FaTwitter, FaFacebookF, FaLinkedin } from "react-icons/fa";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters long")
    .max(50, "Name can't be longer than 50 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Email is invalid")
    .max(100, "Email can't be longer than 100 characters")
    .required("Email is required"),
  subject: yup
    .string()
    .min(5, "Subject must be at least 5 characters long")
    .max(100, "Subject can't be longer than 100 characters")
    .required("Subject is required"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(500, "Message can't be longer than 500 characters")
    .required("Message is required"),
});

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const form = useRef();
  const [isHuman, setIsHuman] = useState(false);

  const sendEmail = (data, e) => {
    e.preventDefault();

    if (!isHuman) {
      alert('Please confirm you are human.');
      return;
    }

    emailjs.sendForm('service_oqukn29', 'template_1v5d595', form.current, 'B7wWpjE6I7Ln-OPuJ')
      .then(
        () => {
          alert('Message sent successfully!');
          reset();
          setIsHuman(false); // Reset the toggle state after submission
        },
        (error) => {
          console.error('Failed to send message:', error);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className="section zubuz-section-padding2 white-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="zubuz-default-content m-right">
              <h2 className='lg:text-6xl text-2xl font-bold md:text-4xl '>Contact our support team</h2>
              <p className="text-base leading-loose open-sans">
                Book an appointment with our team now!
              </p>
              <div className="zubuz-extara-mt">
                <div className="zubuz-iconbox-wrap-left d-block">
                  <div className="zubuz-iconbox-data">
                    <span>Office Location:</span>
                    <p className="text-sm leading-loose open-sans">
                      US Office: 10, Hillcrest Avenue, West Orange, NJ. 07052.
                    </p>
                    <p className="text-sm leading-loose open-sans">
                      Nigeria Office: 20, Fola Agoro Street, Shomolu, Lagos.
                    </p>
                  </div>
                </div>
                <div className="zubuz-iconbox-wrap-left d-block">
                  <div className="zubuz-iconbox-data data-small">
                    <span>Social Media:</span>
                    <div className="zubuz-social-icon social-box">
                      <ul>
                        <li>
                          <Link href="https://twitter.com/">
                            <FaTwitter />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://facebook.com/">
                            <FaFacebookF />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.linkedin.com/">
                            <FaLinkedin />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="zubuz-form-wrap">
              <h3>Fill the form below</h3>
              <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="zubuz-main-form">
                      <input type="text" placeholder="Your Name*" {...register("name")} />
                      {errors.name && <p className="error">{errors.name.message}</p>}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="zubuz-main-form">
                      <input type="email" placeholder="Email Address*" {...register("email")} />
                      {errors.email && <p className="error">{errors.email.message}</p>}
                    </div>
                  </div>
                </div>
                <div className="zubuz-main-form">
                  <input type="text" placeholder="Subject" {...register("subject")} />
                  {errors.subject && <p className="error">{errors.subject.message}</p>}
                </div>
                <div className="zubuz-main-form">
                  <textarea
                    name="textarea"
                    placeholder="Write us your comment"
                    {...register("message")}
                  ></textarea>
                  {errors.message && <p className="error">{errors.message.message}</p>}
                </div>
                <div className="zubuz-main-form">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      checked={isHuman}
                      onChange={() => setIsHuman(!isHuman)}
                    />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">I am a human</span>
                  </label>
                </div>
                <button
                  style={{ borderRadius: 5, backgroundColor: '#3b82f6' }}
                  type='submit'
                  className="w-full bg-blue-600 text-white block px-3 py-2 text-base font-medium hover:bg-blue-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
