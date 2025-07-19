import SubscriptionTextField from '../subscription-text-field/subscription-text-field';
import './big-footer.css';
const BigFooter = () => (
  <footer className="big-footer">
    <div className="big-footer__block">
      <div className="big-footer__top">
        <div className="big-footer__top-wrapper">
          <ul className="big-footer__section-1">
            <li className="big-footer__section-item">
              <a className="footer-logo">
                <div className="toxin-logo" />
              </a>
            </li>
            <li className="big-footer__section-item">
              <p className="big-footer__text">
                  Бронирование номеров в лучшем отеле 2019 года по версии
                  ассоциации «Отельные взгляды»
              </p>
            </li>
          </ul>
          <ul className="big-footer__section-2">
            <li className="big-footer__section-item">
              <h3 className="big-footer__list-title">навигация</h3>
            </li>
            <li>
              <a className="nav-link" href="#">
                <p className="navLink-text">О нас</p>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                <p className="navLink-text">Новости</p>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                <p className="navLink-text">Служба поддержки</p>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                <p className="navLink-text">Услуги</p>
              </a>
            </li>
          </ul>
          <ul className="big-footer__section-3">
            <li className="big-footer__section-item">
              <h3 className="big-footer__list-title">о нас</h3>
            </li>
            <li>
              <a className="nav-link" href="#">
                <p className="navLink-text">О сервисе</p>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                <p className="navLink-text">Наша команда</p>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                <p className="navLink-text">Вакансии</p>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                <p className="navLink-text">Инвесторы</p>
              </a>
            </li>
          </ul>
          <ul className="big-footer__section-4">
            <li className="big-footer__section-item">
              <h3 className="big-footer__list-title">Служба поддержки</h3>
            </li>
            <li>
              <a className="nav-link" href="#">
                <p className="navLink-text">Соглашения</p>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                <p className="navLink-text">Сообщества</p>
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                <p className="navLink-text">Связь с нами</p>
              </a>
            </li>
          </ul>
          <ul className="big-footer__section-5">
            <li className="big-footer__section-item">
              <h3 className="big-footer__list-title get">Подписка</h3>
            </li>
            <li className="big-footer__section-item">
              <p className="big-footer__text get">
                  Получайте специальные предложения и новости сервиса
              </p>
            </li>
            <li className="big-footer__section-item">
              <SubscriptionTextField />
            </li>
          </ul>
        </div>
      </div>
      <div className="big-footer__bottom">
        <div className="big-footer__wrapper-bottom">
          <p className="big-footer__copyright">
              Copyright © 2018 Toxin отель. Все права зачищены.
          </p>
          <div className="big-footer__social-link">
            <ul className="big-footer__social-link-list">
              <li className="big-footer__social-item">
                <a className="twitter"></a>
              </li>
              <li className="big-footer__social-item">
                <a className="facebook"></a>
              </li>
              <li className="big-footer__social-item">
                <a className="instagram"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

{
  /* <footer className="small-footer">
  <div className="toxin-logo" />
  <div className="small-footer__bottom">
    <p className="small-footer__copyright">
      Copyright © 2018 Toxin отель. Все права зачищены.
    </p>
    <div className="small-footer__social-link">
      <ul className="small-footer__social-link-list">
        <li className="small-footer__social-item">
          <a className="twitter"></a>
        </li>
        <li className="small-footer__social-item">
          <a className="facebook"></a>
        </li>
        <li className="small-footer__social-item">
          <a className="instagram"></a>
        </li>
      </ul>
    </div>
  </div>
</footer>) */
}

export default BigFooter;
