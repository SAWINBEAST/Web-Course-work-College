//import React from 'react';
import './Banner.css'; // Стили для Banner

const Banner = () => {
  return (
    <section className="banner">
    {/* Фотография новостройки и поисковая строка */}
      <div className="search">
        <input type="text" placeholder="Поиск квартир" />
        <button>Поиск</button>
      </div>
  
    </section>
  );
}

export default Banner;