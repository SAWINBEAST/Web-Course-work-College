//import React from 'react';
import './Catalog.css'; // Стили для Catalog
import data from './data.json';

const Catalog = () => {
  const { builders } = data;

  return (
    <div className="catalog">
      <h2>Catalog</h2>
      {builders.map(builder => (
        <div key={builder.id}>
          <h3>{builder.name}</h3>
          {builder.complexes.map(complex => (
            <div key={complex.id}>
              <h4>{complex.name}</h4>
              <p>{complex.description}</p>
              <ul>
                {complex.apartments.map(apartment => (
                  <li key={apartment.id}>
                    Type: {apartment.type}, Area: {apartment.area}, Price: {apartment.price}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Catalog;