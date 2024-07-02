import React, { useState, ChangeEvent, FormEvent } from 'react';
import module from "../assets/Styles/Contact.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface FormData {
  name: string;
  surname: string;
  email: string;
  comments: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    email: '',
    comments: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetch('https://formspree.io/f/mqkvbjqk', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then((response) => {
        if (response.ok) {
          alert('Form submitted successfully!');
          setFormData({
            name: '',
            surname: '',
            email: '',
            comments: ''
          });
        } else {
          alert('Form submission failed.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Form submission failed.');
      });
  };

  return (
    <div className={module['container-fluid']} id="contact">
      <h1>CONTACT</h1>
      <div className={module.container}>
        <form className={module.form} onSubmit={handleSubmit}>
          <div className={module.contact}>
            <div className={`${module.intro} mb-3 text-center`} id="inputBox">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 text-align-center" id="inputBox">
              <input
                type="text"
                className="form-control"
                name="surname"
                placeholder="Enter your surname"
                required
                value={formData.surname}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 text-align-center" id="inputBox">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4" id="inputBox">
              <textarea
                className="form-control"
                name="comments"
                placeholder="Leave a comment here"
                id="floatingTextarea"
                value={formData.comments}
                onChange={handleChange}
              />
              <label htmlFor="floatingTextarea">Comments</label>
            </div>
            <button type="submit" className="btn btn-primary" id="con">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
