import React from 'react';
import './Contact.scss';
import TelegramImg from './img/Telegram.png';
import PhoneImg from './img/telephone.png';
import VkImg from './img/vk.png'
import mapImg from './img/map.png'


export default function Contact() {
  return (
    <contact className="contact">
      <div className='contact__item'>
        <iframe className='contact__map' src="https://yandex.ru/map-widget/v1/?um=constructor%3Af56c9cede37c2345aa49aaa2fe7e1fc1d46b5996ea06e72785776dfb0ec79632&amp;source=constructor" width='400'
          height="400" frameborder="0" title="Map"></iframe>

        <div className="contact__contacts">
          <h2 >Мастерская домашнего уюта</h2>
          <h4>Мастерская работает в режиме "по звонку"</h4>

          <div className="grid-container">
            <img
              src={mapImg}
              alt="Адрес"
            />
            <p >Московская область, г. Химки,
              мкр. Сходня, ул. Первомайская, д.12</p>
            <img
              src={PhoneImg}
              alt="Телефон"
            />
            <a href="tel:+7 (977) 663-09-69"> +7 (977) 663-09-69</a>
            <img className='contact__contacts_vk'
              src={VkImg}
              alt="ВКонтакте"
            />
            <a href="http://vk.com/puhpero_shodnya">vk.com/puhpero_shodnya</a>
            <img
              class="main-contact-social__img"
              src={TelegramImg}
              alt="Телеграм"
            />
            <a href="http://t.me/OliferAnna">t.me/OliferAnna</a>

          </div>
          <h3><b>Время работы:</b></h3>
          <p>Пн. - Пт.  11:00 - 19:00 </p>
          <p>Сб. - Вс.  11:00 - 18:00</p>
        </div>
      </div>

    </contact >
  );
}
