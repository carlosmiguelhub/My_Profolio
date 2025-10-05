import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contactsection.css";

function Contactsection() {
  return (
    <section id="contact" className="contact-section container-fluid py-5">
      <div className="row align-items-center">
        {/* Left Side - Map */}
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="map-container-fluid shadow rounded">
            <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.9168016301976!2d124.025302939117!3d10.503081056955695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9bbe7615b8873%3A0x71bf861406bf5b3a!2sCTU%20Danao%20Campus%20ROTC%20Office!5e1!3m2!1sen!2sph!4v1759635211561!5m2!1sen!2sph"

              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="col-md-6 ">
          <h2 className="fw-bold mb-4">Contact Me</h2>
          <p className="text-muted">
            Feel free to reach out if you’d like to collaborate or have any questions!
          </p>
          <ul className="list-unstyled mb-4">
            <li><strong>Email:</strong> carlosmiguelbermejo617@gmail.com</li>
            <li><strong>Phone:</strong> +63 929 720 2742</li>
            <li><strong>Location:</strong> Sabang Danao Cebu, Philippines</li>
          </ul>

          <form class="container-fluid ">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Type your message..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contactsection;
