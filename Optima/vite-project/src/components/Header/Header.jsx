
//import React from 'react';
import './Header.css'; // Стили для Header

const Header = () => {
  return (
    <header className="header">
      {/* Навигация и логотип */}
      <div className="logo">
        <img src='../public/ОптимаЛого.png' className='header-logo-img' />
      </div>
      <nav>
        <ul className='header-nav-ul'>
          <li><a href="#catalog" className='header-nav-ul-li-a'>Каталог</a></li>
          <li><a href="#offers" className='header-nav-ul-li-a'>Акции</a></li>
          <li><a href="#offers" className='header-nav-ul-li-a'>Купить</a></li>
          <li><a href="#offers" className='header-nav-ul-li-a'>FAQ</a></li>
          <li><a href="#offers" className='header-nav-ul-li-a'>Контакты</a></li>
          {/* Другие ссылки навигации */}
        </ul>
      </nav>
     
    </header>
  );
}

export default Header;
