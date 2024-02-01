//import React from 'react';
import './Footer.css'; // Стили для Footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Контактная информация</p>
        {/* Дополнительная информация о контактах */}
      </div>
      <div className="site-map">
        <p>Карта сайта</p>
        {/* Ссылки на различные разделы сайта */}
      </div>
      <div className="social-links">
        <p>Ссылки на социальные сети</p>
        {/* Ссылки на социальные сети */}
      </div>
      <div className="copyright">
        <p>&copy; 2024 Агентство продажи жилых новостроек</p>
        {/* Информация о копирайте */}
      </div>
    </footer>
  );
}

export default Footer;