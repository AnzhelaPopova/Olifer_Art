import React from 'react';
import './Card.scss';

const Card = ({ name, price, speed, color, selected, onClick }) => {
    const cardClass = `card-card ${color}-card`
    return (
        <div className={"card-card " + (selected ? " selected" : "")} onClick={onClick}>
            <div className={cardClass}>
                <div className="card-name">{name}</div>
                <p> <sup> <span>руб</span></sup> {price} <sub><span>/мес</span></sub></p>
                <div className="card-speed">{speed}</div>
                <div className='card-info'>
                    Объём включенного <br />
                    трафика не ограничен
                </div>
            </div>
        </div>
    )
}

export default Card;
