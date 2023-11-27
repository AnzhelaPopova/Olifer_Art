import React from 'react';
import './Clean.scss';
import Card from '../Card/Card'

const Cards = [
    {
        "key": "1",
        "color": "blue",
        "name": "РЕСТАВРАЦИЯ ОДЕЯЛ",
        "price": (
            <>
                <table className='clean__table'>
                    <tr>
                        <th></th>
                        <th>Размер</th>
                        <th>Цена</th>
                    </tr>
                    <tr>
                        <td>Детское</td>
                        <td>100х140</td>
                        <td>2700р</td>
                    </tr>
                    <tr>
                        <td>Одинарное</td>
                        <td>140х205</td>
                        <td>3200р</td>
                    </tr>
                    <tr>
                        <td>Полуторное</td>
                        <td>155х205</td>
                        <td>4000р</td>
                    </tr>
                    <tr>
                        <td>Двуспальное</td>
                        <td>175х205</td>
                        <td>5200р</td>
                    </tr>
                    <tr>
                        <td>Евро</td>
                        <td>200х210</td>
                        <td>5700р</td>
                    </tr>
                </table>
            </>
        ),
        "description": "Стоимость указана ВМЕСТЕ с материалом ТИК (подушечный) и размере квадратов 30см х 30см",
    },
    {
        "key": "2",
        "color": "green",
        "name": "ЧИСТКА ПОДУШЕК",
        "price": (
            <>
                <table className='clean__table'>
                    <tr>
                        <th>Размер</th>
                        <th>Цена</th>
                    </tr>
                    <tr>
                        <td>70х70</td>
                        <td>700р</td>
                    </tr>
                    <tr>
                        <td>65х65</td>
                        <td>700р</td>
                    </tr>
                    <tr>
                        <td>60х60</td>
                        <td>650р</td>
                    </tr>
                    <tr>
                        <td>50х70</td>
                        <td>600р</td>
                    </tr>
                    <tr>
                        <td>50х50</td>
                        <td>550р</td>
                    </tr>
                    <tr>
                        <td>40х60</td>
                        <td>550р</td>
                    </tr>
                    <tr>
                        <td>40х40</td>
                        <td>500р</td>
                    </tr>

                </table>
            </>
        ),
        "description": "Возможен пошив наперников по Вашим размерам",
    }
];

export default function Clean() {

    return (
        <div className='container'>
            <h2>Чистка и реставрация перьевых и пуховых подушек и одеял</h2>
            <div className='container__list'>
                <ul><strong>Сухая чистка подушек - это:</strong>
                    <li>- удаление пыли и ломаного пера;</li>
                    <li>- дезинфекция УФ - лампой;</li>
                    <li>- подсушивание и распушивание пера;</li>
                    <li>- смена наперника;</li>
                    <li>- по необходимости изменение размера.</li>
                </ul>
                <ul><strong>Реставрация одеяла - это:</strong>
                    <li>- удаление старого чехла и прогон <br />пуха/пера через машину;</li>
                    <li>- пошив нового чехла;</li>
                    <li>- набивка чехла пухом/пером.</li>
                </ul>
            </div>

            <p>Чистка подушек производится в вашем присутствии, что позволяет вам наблюдать и контролировать процесс. Ваше перо обрабатывается индивидуально БЕЗ пера из чужих подушек.</p>

            <div className="container__card">
                {
                    Cards.map((card) =>
                        <Card className="container__card_clean"
                            key={card.key}
                            name={card.name}
                            price={card.price}
                            description={card.description}
                            color={card.color}
                        />
                    )
                }
            </div>
        </div>
    );
}
