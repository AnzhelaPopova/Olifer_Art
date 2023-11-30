import React from 'react';
import './Card.scss';

export default function Card({ name, price, description, color }) {
    const cardClass = `card ${color}-card`;
    // const cardStyles = {
    //     height: height || '410px'
    // };
    return (
        <div className="card-card " >
            <div className={cardClass}>
                <div className="card-name">{name}</div>
                <p> {price}</p>

                <div className="card__description">{description}</div>
                <a href="http://t.me/OliferAnna">
                    <button className='card__button '>
                        Заказать
                    </button>
                </a>
            </div>
        </div>
    )
}
