import React from 'react';
import foto from './foto.png';
import './Body.scss';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact'

export default function Body() {
  return (
    <div className='body' >
      <div className='body__item'>
        <img src={foto} className="foto" alt="foto" />
        <h1>Мастерская домашнего уюта </h1>
        <div className='body__item_title-text'>
          <p >Здравствуйте! Меня зовут Анна и я помогаю вам содержать ваш дом в чистоте и красоте.</p>
          <ul>
            <li>
              - Сухая чистка подушек и реставрация пуховых одеял.
            </li>
            <li>
              - Производство на заказ новых подушек и одеял из пера и пуха
            </li>
            <li>
              - Декоративные подушки, ланчматы, накидки на стулья и многое другое.
            </li>
            <li>
              - Текстильные изделия для личного пользования: сумки/шоперы, косметички, кошельки и т.д..
            </li>
            <li>
              - Машинная вышивка.
            </li>
          </ul>
        </div>
      </div>
      <div className='body__button'>
        <Link to="/PillowsBlankets">
          <button>Подушки/Одеяла</button>
        </Link>
        <Link to="/Fancywork">
          <button>Текстильные изделия для дома и личного пользования</button>
        </Link>

      </div>
    </div >
  );
}
<Contact />
