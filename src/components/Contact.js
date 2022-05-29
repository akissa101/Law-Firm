import React, { useState } from 'react';
import Line from './Line';
import AOS from 'aos';
import { db } from '../firebase';
import MessageBox from './MessageBox';
import { AiOutlineSend } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

import emailjs from '@emailjs/browser';

export default function Contact() {
  const { t } = useTranslation();

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

  AOS.init({
    duration: 2000,
  });

  return (
    <section
      className="contact text-gray-800 dark:text-gray-200 "
      id="contact"
      data-aos="fade-up"
    >
      <h1 className=" text-center uppercase text-4xl md:text-6xl pt-8 font-extrabold">
        {t('contact_heading')}
      </h1>
      <p className="text-center md:px-[30%] my-6">{t('contact_subHeading')}</p>
      <Line />
      <div className="mt-12 rounded-lg dark:bg-slate-900 bg-orange-200 md:w-2/4  m-auto items-center justify-center p-12 border-gray-100 ">
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
          // onSubmit={handleCreatePosts}
          className="grid md:grid-cols-2 text-white grid-cols-1 space-y-2 gap-2 w-full "
        >
          <input
            autoComplete="off"
            name="name"
            value={emailInfo.name}
            onChange={handleChange}
            type="text"
            required
            placeholder={t('form_name')}
            className="font-medium px-4 py-2 rounded-lg col-span-2 w-full   placeholder-slate-600 bg-opacity-60 bg-gray-200 dark:bg-black dark:bg-opacity-80"
          />

          <input
            autoComplete="off"
            name="email"
            value={emailInfo.email}
            onChange={handleChange}
            type="email"
            required
            placeholder={t('form_email')}
            className="font-medium px-4 py-2 rounded-lg w-full col-span-2 md:col-span-1  placeholder-slate-600 bg-opacity-60 bg-gray-200 dark:bg-black dark:bg-opacity-80"
          />

          <input
            autoComplete="off"
            value={emailInfo.telephone}
            onChange={handleChange}
            type="number"
            name="telephone"
            placeholder={t('form_telephone')}
            className="font-medium px-4 py-2 rounded-lg w-full col-span-2 md:col-span-1  placeholder-slate-600 bg-opacity-60 bg-gray-200 dark:bg-black dark:bg-opacity-80"
          />
          <textarea
            value={emailInfo.message}
            onChange={handleChange}
            name="message"
            rows={4}
            required
            placeholder={t('form_msg')}
            className="font-medium px-4 py-2 rounded-lg col-span-2 placeholder-slate-600 bg-opacity-60 bg-gray-200 dark:bg-black dark:bg-opacity-80"
          />

          <button
            type="submit"
            className="bg-orange-900 hover:bg-rose-400 hover:text-gray-900 font-bold transition duration-500 ease-in rounded-xl col-span-2 px-4 pt-2 "
            disabled={loading}
          >
            {t('form_btn')}
          </button>
        </form>
      </div>
    </section>
  );
}
