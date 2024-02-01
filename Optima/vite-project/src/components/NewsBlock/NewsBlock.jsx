//import React from 'react';
import './NewsBlock.css'; // Стили для NewsBlock

const NewsBlock = () => {
  // Предположим, что новости загружаются из JSON файла
  const news = [
    { id: 1, title: 'Новость 1', content: 'Содержание новости 1' },
    { id: 2, title: 'Новость 2', content: 'Содержание новости 2' },
    // Другие новости
  ];

  return (
    <div className="news-block">
      <h2>Новости</h2>
      <div className="news-list">
        {news.map((item) => (
          <div key={item.id} className="news-item">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsBlock;