import './small-footer.css';
import Logo from '../toxin-logo/toxin-logo';
const SmallFooter = () => (
  <footer className="small-footer">
    <Logo />
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
  </footer>
);

export default SmallFooter;
