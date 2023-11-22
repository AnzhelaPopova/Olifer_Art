import React, { useState } from 'react';
import './NewPillowsBlankets.scss';
import Card from '../Card/Card';

const Cards = [
    {
        "key": "1",
        "color": "blue",
        "name": "Безлимитный 300",
        "price": "300",
        "speed": "до 10 Мбит/сек",
    },
    {
        "key": "2",
        "color": "green",
        "name": "Безлимитный 450",
        "price": "450",
        "speed": "до 50 Мбит/сек",
    },
    {
        "key": "3",
        "color": "red",
        "name": "Безлимитный 550",
        "price": "550",
        "speed": "до 100 Мбит/сек",
    }
];

export default function NewPillowsBlankets() {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleClick = (key) => {
        setSelectedCard(key);
    };

    return (
        <div className='container'>
            <h2>Новые подушки/одеяла на заказ</h2>
            <p> В мастерской можно заказать изготовление новых подушек и одеял. В отличии от магазинных у изделий на заказ есть масса преимуществ.
            </p>
            <ol>
                <li>Вы сами выбираете расцветку наперника из предложенных тканей, а так же цвет канта к напернику.</li>
                <li>Подушки/одеяла могут быть как стандартных, так и нестандартных размеров.</li>
                <li>Толщину подушек/одеял вы определяете сами.</li>
                <li>
                    <ul>
                        <li>Если вы живёте рядом с мастерской, то можно придти и посмотреть/оценить пух/перо.
                        </li>
                        <li>
                            Если живёте далеко, то отсылаются вам на ватсап/телеграм видео с процессом создания Ваших подушек/одеял.
                        </li>
                    </ul></li>
                <li>
                    <ul>
                        <li>
                            Изменения соотношения пера и пуха.
                        </li>
                        <li>
                            Чем больше пуха, тем мягче подушка , но и дороже.
                        </li>
                        <li>
                            И наоборот, чем больше пера, тем подушка жестче и дешевле.
                        </li>
                    </ul>   </li>
            </ol>
            <div className="container__card">
                {
                    Cards.map((card) =>
                        <Card
                            key={card.key}
                            name={card.name}
                            price={card.price}
                            speed={card.speed}
                            color={card.color}
                            selected={card.key === selectedCard}
                            onClick={() => handleClick(card.key)}
                        />
                    )
                }
            </div>
        </div>
    );
}
