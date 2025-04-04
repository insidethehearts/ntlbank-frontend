import React from 'react';

const CardBlock = ({ card }) => {
  return (
    <div className={`card ${card.card_type.toLowerCase()}-card`}>
      <h3>{card.card_type == "DEBIT" ? "Дебетовая" : "Кредитная"} карта</h3>
      <div className="card-info">
        <p>Номер: {card.number.replace(/(\d{4})(?=\d)/g, '$1 ').trim()}</p>
        <p>Срок действия: {card.expiration_date}</p>
        <p>CVP: {card.cvp}</p>
        <p>Баланс: {card.balance.toFixed(1)}</p>
        {card.card_type === 'CREDIT' && (
          <p>Кредитный лимит: {card.credit_limit.toFixed(1)}</p>
        )}
      </div>
    </div>
  );
};

export default CardBlock;