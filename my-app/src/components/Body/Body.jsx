import React from 'react';
import foto from './foto.png';
import './Body.scss';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact'

function Body(props) {
  return (
    <div className='body' >
      <div className='body__item'>
        <img src={foto} className="foto" alt="foto" />
        <div className='body__item_title'>
          <h1>Мастерская домашнего уюта </h1>
          <p className='body__item_title-text'>Здравствуйте! Меня зовут Анна и я помогаю вам содержать ваш дом в чистоте и красоте</p>
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

export default Body;
