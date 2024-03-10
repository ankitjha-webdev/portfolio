import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Contact = () => {

  const formRef = useRef();
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    message: ''
  });

  const notify = () => toast.success("😎 Message sent successfully. Will respond soon.", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 3,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://api.ankitkumarjha.dev/api/v1/contact", formData).then((result) => {
      e.target.reset();
      notify();
    }).catch((error) => {
      e.target.reset();
    });
  }

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section id="contact">
      <h5>Let me know about your dream project, we will turn it into reality!!</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ankitkumarcse91@gmail.com</h5>
            <a href="mailto:ankitkumarcse91@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" onChange={handleFormData} placeholder="Your Full Name" name="full_name" required />
          <input type="email" onChange={handleFormData} placeholder="Your Email" name="email" required />
          <textarea onChange={handleFormData} placeholder="Your message" rows="7" name="message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </form>
      </div>

    </section>
  )
}

export default Contact