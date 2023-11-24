import React from 'react';
import './Card.scss';

export default function Card({ name, price, time, color }) {
    const cardClass = `card ${color}-card`
    return (
        <div className="card-card ">
            <div className={cardClass}>
                <div className="card-name">{name}</div>
                <p> {price}</p>

                <div className="card__time">{time}</div>
                <a href="http://t.me/OliferAnna">
                    <button className='card__button '>
                        Заказать
                    </button>
                </a>
            </div>
        </div>
    )
}
