import React, { useState } from 'react'; // Make sure to import React
import './contact.css';

const ContactUs = () => {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('');
  const [consultation, setConsultation] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page
    // Handle form submission here, like sending data to an API
    console.log({ name, email, company, service, consultation }); // Log form data to console for testing
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 heading3">
          <h1>Let’s work <br/>Together</h1>
        </div>
        <div className="col-6 body">
          <p>
            ctrl@nomail.com <br/>
            012 098 8765 <br/>
            34 Greenlane, Bryanston Sandton
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-6 contact-image"></div>
        <div className="col-6 form">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="yourName" className="form-label">Your Name*</label>
              <input
                type="text"
                className="form-control"
                id="yourName"
                placeholder="First name and last name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="yourEmail" className="form-label">Your Email*</label>
              <input
                type="email"
                className="form-control"
                id="yourEmail"
                placeholder="person@enomail.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="yourCompany" className="form-label">Your Company*</label>
              <input
                type="text"
                className="form-control"
                id="yourCompany"
                placeholder="Company Name"
                value={company}
                onChange={e => setCompany(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="typeOfService" className="form-label"> Type of Service*</label>
              <input
                type="text"
                className="form-control"
                id="typeOfService"
                placeholder="Hi Ctrl Team can you help me with..."
                value={service}
                onChange={e => setService(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="freeConsultation"
                checked={consultation}
                onChange={e => setConsultation(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="freeConsultation">
                Get a free 30-minute consultation to discuss your project.
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Submit Request</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
