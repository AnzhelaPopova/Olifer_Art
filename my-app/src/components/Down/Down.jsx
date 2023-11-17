import React from 'react';
import './Down.css';
import { Link } from "react-router-dom";
import logo from './logo.jpg';


export default function Down() {

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
                            <Link to="/contacts">Контакты</Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    );
}
