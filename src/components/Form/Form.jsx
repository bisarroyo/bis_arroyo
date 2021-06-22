import React from 'react';
import Styles from './Styles';

export const ContactForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Styles>
      <form action="" onSubmit={handleSubmit}>
        <h2>Contact me</h2>
        <label htmlFor='fullName'></label>
        <input
          type='text'
          name='fullName'
          id='fullName'
          placeholder='Full name'
          maxLength='50'
          // onChange={}
          // value={}
        />
        <label htmlFor='name'></label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          maxLength='50'
          // onChange={}
          // value={}
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
          // onChange={}
          // value={}
        />
        <button type='button'>Send</button>
      </form>
    </Styles>
  );
};

export default ContactForm;

