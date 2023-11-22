import React from 'react';
import { Link } from "react-router-dom";

import './PillowsBlankets.scss';

export default function PillowsBlankets() {

    return (
        <div className='container'>
            <h2>Подушки/Одеяла</h2>
            <div>
                <p>В мастерской можно произвести сухую читску перьевых подушек и реставрацию старых пуховых одеял.</p>
                <p>А так же изготовить новые подушки и одеяла с учётом Ваших предпочтений и пожеланий, в том числе нестандартные.</p>
            </div>
            <div className='container__button'>
                <Link to="/Clean">
                    <button>
                        Чистка/Реставрация
                    </button>
                </Link>
                <Link to="/NewPillowsBlankets">
                    <button>
                        Новые подушки/одеяла на заказ
                    </button>
                </Link>
            </div>
        </div>
    );
}
