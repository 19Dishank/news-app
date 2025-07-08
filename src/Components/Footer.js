import { Link } from 'react-router-dom';
import React from 'react';

const Footer = ({ mode }) => {
  const isDark = mode === 'dark';

  return (
    <>
      <style>{`
        .footer {
          padding: 20px 0;
          text-align: center;
          font-size: 0.9rem;
          border-top: 1px solid #dee2e6;
        }

        .footer a {
          text-decoration: none;
          margin: 0 10px;
          transition: color 0.3s ease;
        }

        .footer a:hover {
          color: #0d6efd;
        }

        .footer-light {
          background-color: #f8f9fa;
          color: #6c757d;
        }

        .footer-light a {
          color: #6c757d;
        }

        .footer-dark {
          background-color: #1f1f1f;
          color: #ccc;
          border-top: 1px solid #444;
        }

        .footer-dark a {
          color: #ccc;
        }

        .footer-dark a:hover {
          color: #66b2ff;
        }
      `}</style>

      <footer className={`footer ${isDark ? 'footer-dark' : 'footer-light'} mt-auto mt-5`}>
        <div className="container">
          <p className="mb-1">&copy; {new Date().getFullYear()} QuickyNews — Stay Informed Daily</p>
          <div>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
