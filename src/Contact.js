import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

    const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3962lvn', 'template_fgpztv7', form.current, 'eQ7Vq1Ik1K-XG1G-L')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
  <div>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" cols="47" rows="10"/>
      <input type="submit" value="Send" id='btn-sub' />
    </form>
  </div>
  );
};

export default Contact;






// ('service_3962lvn', 'template_fgpztv7', form.current, 'eQ7Vq1Ik1K-XG1G-L')