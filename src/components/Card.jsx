import React from 'react';
import tourismData from '../constant/Tourism';

const CardList = ({ searchTerm }) => {
  const filteredData = tourismData.filter((item) =>
    item.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {filteredData.map((item, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={item.image} alt={item.destination} className="w-full h-60 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-bold">{item.destination}</h3>
            <p className="text-gray-600">{item.price}</p>
            <div className="flex text-yellow-500">
              {Array.from({ length: Math.round(item.rating) }, (_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
