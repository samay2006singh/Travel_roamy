import React from 'react';

const Contact = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1501594907352-04cda38ebc29)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '80px 20px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Get in Touch</h1>
        <p style={{ fontSize: '1.2rem' }}>We’d love to hear from you! Let us help plan your next adventure.</p>
      </div>

      {/* Main Contact Section */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '3rem 2rem',
          maxWidth: '1000px',
          margin: '0 auto',
          gap: '2rem',
        }}
      >
        {/* Contact Form */}
        <form
          style={{
            flex: '1',
            minWidth: '280px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <h2>Send us a message</h2>
          <input
            type="text"
            placeholder="Your Name"
            required
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            style={inputStyle}
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            required
            style={{ ...inputStyle, resize: 'vertical' }}
          ></textarea>
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>

        {/* Contact Info */}
        <div style={{ flex: '1', minWidth: '250px' }}>
          <h2>Contact Information</h2>
          <p><strong>📍 Address:</strong> Najafgarh</p>
          <p><strong>📞 Phone:</strong> 8287988828</p>
          <p><strong>✉ Email:</strong> nd4614490@gmail.com</p>
          <p><strong>🕒 Hours:</strong> Mon - Fri: 9:00 AM - 6:00 PM</p>
        </div>
      </div>
    </div>
  );
};

// Input & Button Styling
const inputStyle = {
  padding: '12px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};

const buttonStyle = {
  backgroundColor: '#1e90ff',
  color: 'white',
  padding: '12px',
  border: 'none',
  borderRadius: '5px',
  fontSize: '1rem',
  cursor: 'pointer',
};

export default Contact;