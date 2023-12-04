import React, { useState, useRef, useEffect } from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import logo from './logo.png';
import menu from './menu.png';
import PopUp from '../Pop_up/Pop_up';
import close from './close.png'

export default function Header() {
  const [showPopUp, setShowPopUp] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleShowPopUp = () => {
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowPopUp(false);
    }
  };

  return (
    <>
      <div>
        <nav className="cardHeader__desktop">
          <ul>
            <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
            <li>
              <Link to="/" >Главная</Link>
            </li>
            <li>
              <Link to="/PillowsBlankets">Подушки/Одеяла</Link>
            </li>
            <li>
              <Link to="/Fancywork">Текстильные изделия</Link>
            </li>
            <li>
              <Link to="/Gallery">Фотогалерея</Link>
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

      <div>
        <nav className="cardHeader__mbl">

          <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>

          <div ref={ref}>
            <img src={menu} alt="Open PopUp" onClick={handleShowPopUp} />
            {showPopUp && (
              <PopUp show handleClose={handleClosePopUp}>
                <img src={close} className="logo_close" alt="close" onClick={handleClosePopUp} />
                <Link to="/" onClick={handleClosePopUp}>Главная</Link>
                <Link to="/PillowsBlankets" onClick={handleClosePopUp}>Подушки/Одеяла</Link>
                <Link to="/Fancywork" onClick={handleClosePopUp}>Текстильные изделия</Link>
                <Link to="/Questions" onClick={handleClosePopUp}>Вопросы</Link>
                <Link to="/Contact" onClick={handleClosePopUp}>Контакты</Link>
                <Link to="/Gallery" onClick={handleClosePopUp}>Фотогалерея</Link>
              </PopUp>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
