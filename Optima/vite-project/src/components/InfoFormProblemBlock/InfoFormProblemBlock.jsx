//import React from 'react';
import './InfoFormProblemBlock.css'; // Стили для InfoFormProblemBlock

const InfoFormProblemBlock = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика отправки формы в json-файл
  };

  return (
    <section className="info-form-problem-block">
      <div className="info-block">Информация о предложениях</div>
      <div className="form-block">
        <h2>Хочу квартиру</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Имя" />
          <input type="tel" placeholder="Телефон" />
          <input type="email" placeholder="Почта" />
          <input type="text" placeholder="Город" />
          <textarea placeholder="Прочие пожелания"></textarea>
          <button type="submit">Отправить</button>
        </form>
      </div>
      <div className="problem-block">Животрепещущая проблема</div>
      <button className="scroll-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Наверх</button>
    </section>
  );
}

export default InfoFormProblemBlock;