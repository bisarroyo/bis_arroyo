import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Styles from './Styles';

const ContactForm = () => {
  const [form, setForm] = useState({ fullName: '', email: '', message: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.send('service_drvuqj9', 'template_4do2mlk', form, 'user_6jm6KpxJVyCrP322EtqhO')
      .then((result) => {
        console.log(result.text);
        setForm({ fullName: '', email: '', message: '' });
      }, (error) => {
        console.log(error.text);
      });
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleClick = () => {
    console.log('boton clickeado');
  };

  return (
    <Styles id='contact'>
      <form action="" onSubmit={handleSubmit}>
        <h2>Contact me</h2>
        <label htmlFor='fullName'></label>
        <input
          type='text'
          name='fullName'
          id='fullName'
          placeholder='Full name'
          maxLength='50'
          onChange={handleChange}
          value={form.fullName}
        />
        <label htmlFor='name'></label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          maxLength='50'
          onChange={handleChange}
          value={form.email}
        />
        <label htmlFor='message'></label>
        <textarea
          type='textarea'
          name='message'
          id='message'
          placeholder='Message'
          maxLength='200'
          cols='40'
          rows='10'
          onChange={handleChange}
          value={form.message}
        />
        <button type='submit' onClick={handleClick}>Send</button>
      </form>
    </Styles>
  );
};

export default ContactForm;

