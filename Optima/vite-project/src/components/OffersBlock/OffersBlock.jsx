//import React from 'react';
import './OffersBlock.css'; // Стили для OffersBlock
import data from './data.json';

const OffersBlock = () => {
  const { offers, builders, complexes, apartments } = data;

  return (
    <div className="offers-block">
      <h2>Offers</h2>
      <ul>
        {offers.map(offer => {
          const builder = builders.find(b => b.id === offer.builderId);
          const complex = complexes.find(c => c.id === offer.complexId);
          const apartment = apartments.find(a => a.id === offer.apartmentId);

          return (
            <li key={offer.id}>
              Builder: {builder.name}, Complex: {complex.name}, Apartment: {apartment.type}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OffersBlock;