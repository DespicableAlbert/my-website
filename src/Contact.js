// src/Contact.js
import BackButton from './components/BackButton';
import CyberButton from './components/CyberButton';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-page">
      <h1 className="flicker">Get in Touch</h1>
      <p className="intro">
        Welcome to the digital frontier — where ideas flicker and connections ignite.
      </p>

      <div className="contact-grid">
        {/* Left Panel: Email */}
        <div className="right-panel">
          <h2>Email Me</h2>
          <p>Reach me directly at:</p>
          <p
            style={{
              fontWeight: 'bold',
              fontSize: '16px',
              color: '#a6ff00',
              textShadow: '0 0 8px #a6ff00, 0 0 16px #d4ff66',
            }}
          >
            kuangshenalbert@gmail.com
          </p>
        </div>

        {/* Right Panel: Contact Form */}
        <div className="left-panel">
          <h2>Leave a Note</h2>
          <form
            className="contact-form"
            action="https://formspree.io/f/xeolkegj"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Note"
              rows="5"
              required
            />
            <CyberButton type="submit">Send</CyberButton>
          </form>
        </div>
      </div>

      <BackButton />
    </div>
  );
}