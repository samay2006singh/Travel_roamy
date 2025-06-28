import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '100px 20px',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>About Travel With US</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Explore the world with confidence. Discover breathtaking places and experiences.
        </p>
      </div>

      {/* Info Section */}
      <div style={{ padding: '3rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Who We Are</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
          TravelNow is a platform built for dreamers and explorers. Whether you're planning your
          first trip abroad or looking for hidden gems in your own country, we help you find,
          organize, and get inspired by beautiful destinations worldwide.
        </p>

        <h2 style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem' }}>Why TravelNow?</h2>
        <ul style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          <li>🌍 Discover curated travel locations with stunning visuals</li>
          <li>📸 Browse photo-rich experiences to inspire your next trip</li>
          <li>🔍 Use our Explore page to search and filter places by interest</li>
          <li>📅 Plan your trip with ease and excitement</li>
        </ul>

        {/* Call to Action */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link
            to="/explore"
            style={{
              padding: '12px 30px',
              backgroundColor: '#1e90ff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
            }}
          >
            Explore Destinations
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;