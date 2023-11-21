import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import logo from './logo.jpg';


export default function Header() {

  return (
    <header className="cardHeader">
      <div>
        <nav>
          <ul>
            <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/PillowsBlankets">Подушки/Одеяла</Link>
            </li>
            <li>
              <Link to="/Fancywork">Текстильные изделия</Link>
            </li>
            <li>
              <Link to="/Questions">Вопросы</Link>
            </li>
            <li>
              <Link to="/Contact">Контакты</Link>
            </li>
          </ul>
        </nav>
      </div>

    </header>
  );
}
