import "./FormStyles.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jmnvmwk', 'template_v4tbpnp', form.current, {
        publicKey: '6y2Gs-HDdNU4ngefD',
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log('Message sent!');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div className="form">
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="name" required></input>
            <label>Email</label>
            <input type="email" name="email" required></input>
            <label></label>
            <label>Message</label>
            <textarea rows="6" name="message" placeholder="Type your message"/>
            <input className="btn" type="submit" value="Send"/>
        </form>
    </div>
  )
}

export default Form