import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        
        {/* Left Side - Social Media */}
        <div className="social-links">
          <a href="https://www.facebook.com/carlosbermejo1x" className="text-light me-3" target="_blank" rel="noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.instagram.com/carlosmiguelbermejo12/" className="text-light me-3" target="_blank" rel="noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.instagram.com/carlosmiguelbermejo12/" className="text-light me-3" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        {/* Center - Name and Copyright */}
        <div className="text-center flex-grow-1">
          <h6 className="mb-1">Carlos Miguel Bermejo</h6>
          <small>© {new Date().getFullYear()} All Rights Reserved</small>
        </div>

        {/* Right Side - GitHub */}
        <div className="https://github.com/carlosmiguelhub">
          <a href="https://github.com" className="text-light" target="_blank" rel="noreferrer">
            <i className="bi bi-github fs-4"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
