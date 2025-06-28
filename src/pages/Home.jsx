import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import CardList from '../components/Card';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Navbar />
      <Slider />
      <h1 className='text-4xl mt-3 text-center font-bold underline underline-offset-4'>
        Famous Destination
      </h1>

      <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <CardList searchTerm={searchTerm} />
      <Footer />
    </>
  );
};

export default Home;
