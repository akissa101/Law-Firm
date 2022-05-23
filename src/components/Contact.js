import React, { useState } from 'react';
import Line from './Line';
import AOS from 'aos';
import { db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import MessageBox from './MessageBox';
import { AiOutlineSend } from 'react-icons/ai';

import emailjs from '@emailjs/browser';

export default function Contact() {
  const postsCollection = collection(db, 'posts');
  const [emailInfo, setEmailInfo] = useState({
    name: '',
    email: '',
    telephone: '',
    message: '',
  });
  const { name, email, telephone, message } = emailInfo;
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  var templateParams = {
    ...emailInfo,
  };

  const sendEmail = (e) => {
    // e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        'service_d6fr6k5',
        'template_r6ssfjs',
        templateParams,
        'user_3J7U4EeRNT7lZCz4I5VJN'
      )
      .then(
        function (response) {
          alert('Email has been sent to the company');
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
    setLoading(false);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEmailInfo({ ...emailInfo, [name]: value });
  };

  const handleCreatePosts = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const newPost = await addDoc(postsCollection, {
        ...emailInfo,
        timestamp: serverTimestamp(),
      });
      if (newPost) {
        setSuccess('Thank you, we will get back to you as soon as we can');
        setEmailInfo({ name: '', email: '', telephone: '', message: '' });
        sendEmail();
        setLoading(false);
      }
    } catch (err) {
      setError(err);
    }
  };

  AOS.init({
    duration: 2000,
  });

  return (
    <section
      className="contact text-gray-100 my-12"
      id="contact"
      data-aos="fade-up"
    >
      <h1 className=" text-center text-4xl md:text-6xl py-12 mt-8 font-extrabold">
        CONTACT US
      </h1>
      <Line />
      <div className="mt-24 rounded-lg bg-orange-800 opacity-50 md:w-2/4  m-auto items-center justify-center p-12  border-2 border-red-700">
        {error ? (
          <div className=" bg-red-200 text-red-900 p-4 rounded-lg mb-2">
            <MessageBox variant="danger">{error.message}</MessageBox>
          </div>
        ) : success ? (
          <div className=" bg-green-200 text-green-900 p-4 rounded-lg mb-2">
            <MessageBox variant="success">{success}</MessageBox>
          </div>
        ) : (
          ''
        )}
        <form
          onSubmit={handleCreatePosts}
          className="grid md:grid-cols-2 grid-cols-1 space-y-2 gap-2 w-full"
        >
          <input
            autoComplete="off"
            name="name"
            value={emailInfo.name}
            onChange={handleChange}
            type="text"
            required
            placeholder="Full Name"
            className="font-medium px-4 py-2 rounded-lg col-span-2 w-full bg-black bg-opacity-70 placeholder-slate-500"
          />

          <input
            autoComplete="off"
            name="email"
            value={emailInfo.email}
            onChange={handleChange}
            type="email"
            required
            placeholder="Email"
            className="font-medium px-4 py-2 rounded-lg w-full col-span-2 md:col-span-1  bg-black bg-opacity-70 placeholder-slate-500"
          />

          <input
            autoComplete="off"
            value={emailInfo.telephone}
            onChange={handleChange}
            type="number"
            name="telephone"
            placeholder="Telephone (optional)"
            className="font-medium px-4 py-2 rounded-lg w-full col-span-2 md:col-span-1  bg-black bg-opacity-70 placeholder-slate-500"
          />
          <textarea
            value={emailInfo.message}
            onChange={handleChange}
            name="message"
            rows={4}
            required
            placeholder="Message"
            className="font-medium px-4 py-2 rounded-lg col-span-2 bg-black bg-opacity-70 placeholder-slate-500"
          />

          <button
            type="submit"
            className="bg-slate-900 hover:bg-fuchsia-400 hover:text-gray-900  rounded-xl col-span-2 px-4 py-2 "
            disabled={loading}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
