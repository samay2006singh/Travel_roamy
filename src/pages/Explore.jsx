import React from 'react';

const destinations = [
  {
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1551907234-719aefb6c546',
    description: 'A tropical paradise known for beaches, rice terraces, and temples.',
  },
  {
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231',
    description: 'Famous for whitewashed houses, sunsets, and cliffside views.',
  },
  {
    name: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458',
    description: 'Historic city with cherry blossoms, temples, and tea houses.',
  },
  {
    name: 'Banff, Canada',
    image: 'https://images.unsplash.com/photo-1508261300930-98514f34b34e',
    description: 'Stunning national park with mountains, lakes, and wildlife.',
  },
  {
    name: 'Cape Town, South Africa',
    image: 'https://images.unsplash.com/photo-1586782701501-1f4d7fdc6920',
    description: 'A coastal gem known for Table Mountain and vibrant culture.',
  },
  {
    name: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1526481280690-7c4c8adf38ab',
    description: 'Luxury shopping, ultramodern architecture, and desert adventures.',
  },
];


const Explore = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem' }}>Explore Destinations</h1>
        <input
      type="text"
      className="border-black border-2 p-2 w-full max-w-md rounded-xl m-4"
      placeholder="Enter destination"
      // value={value}
      // onChange={onChange}
    />
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          Discover amazing places across the globe for your next journey.
        </p>
      </div>

      {/* Grid of Destination Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}
      >
        {destinations.map((place, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <img
              src={place.image}
              alt={place.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ margin: '0 0 0.5rem' }}>{place.name}</h3>
              <p style={{ fontSize: '0.95rem', color: '#555' }}>
                {place.description}
              </p>
              <button
                style={{
                  marginTop: '1rem',
                  padding: '10px 20px',
                  backgroundColor: '#1e90ff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;