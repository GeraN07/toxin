import './header-main.css';
import '../buttons/buttons.css';
import Logo from '../toxin-logo/toxin-logo';
import { useState } from 'react';

const HeaderMain = () => {
  const [headerExpanded, setHeaderExpanded] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [agreeExpanded, setAgreeExpanded] = useState(false);

  const HandleBurgerButtonClick = () => {
    setHeaderExpanded((prev) => !prev);
  };
  const HandleServicesClick = () => {
    setServicesExpanded((prev) => !prev);
  };
  const HandleAgreeClick = () => {
    setAgreeExpanded((prev) => !prev);
  };

  return (
    <header className="page-header page-header--notlog">
      <div className="page-header__block page-header__block--notlog">
        <a className="page-header__logo" href="/">
          <Logo />
        </a>
        <ul className={`page-header__nav ${headerExpanded ? 'active' : ''}`}>
          <li>
            <a className="nav-link" href="#">
              <p className="navLink-text">О нас</p>
            </a>
          </li>
          <li className="page-header__services" onClick={HandleServicesClick}>
            <a className="nav-link" href="#">
              <p className="page-header__services-text">Услуги</p>
            </a>
            <ul
              className={`page-header__sevices-list  ${
                servicesExpanded ? 'active' : ''
              }`}
            >
              <a className="nav-link" href="#" />
              <li>
                <a className="nav-link" href="#" />
                <a className="nav-link" href="#">
                  <p className="navLink-text">SPA</p>
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  <p className="navLink-text">Такси от аэропорта</p>
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  <p className="navLink-text">Камера хранения</p>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="nav-link" href="#">
              <p className="navLink-text">Вакансии</p>
            </a>
          </li>
          <li>
            <a className="nav-link" href="#">
              <p className="navLink-text">Новости</p>
            </a>
          </li>
          <li className="page-header__agree" onClick={HandleAgreeClick}>
            <a className="nav-link" href="#">
              <p className="agree-text">Соглашения</p>
            </a>
            <ul
              className={`page-header__agree-list ${
                agreeExpanded ? 'active' : ''
              }`}
            >
              <a className="nav-link" href="#" />
              <li>
                <a className="nav-link" href="#" />
                <a className="nav-link" href="#">
                  <p className="navLink-text">Партнеры</p>
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  <p className="navLink-text">Поставщики</p>
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  <p className="navLink-text">Франшиза</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div
          className={`page-header__button-block ${
            headerExpanded ? 'active' : ''
          }`}
        >
          <span className="button-white">
            <a className="button-white__link" href="/login/?param=Log">
              войти
            </a>
          </span>
          <span className="button-purpule">
            <a className="button-purpule__link" href="/login/?param=Reg">
              зарегистрироваться
            </a>
          </span>
        </div>
      </div>
      <span
        className="page-header__burger-button burger-button"
        onClick={HandleBurgerButtonClick}
      >
        <div
          className={`burger-button__icon ${headerExpanded ? 'active' : ''}`}
        />
      </span>
    </header>
  );
};

export default HeaderMain;
