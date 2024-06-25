import BigFooter from '../../components/big-footer/big-footer';
import { Link } from 'react-router-dom';
import HeaderMain from '../../components/header-main/header-main';
import SmallFooter from '../../components/small-footer/small-footer';
import { Helmet } from 'react-helmet-async';
import './not-found.css';
const NotFound = () => {
  return (
    <div className="landing-page not-found">
      <Helmet>
        <title>404 Not-found</title>
      </Helmet>
      <HeaderMain />
      <main className="not-found__main-block">
        <h1 className="not-found__caption">404 Not Found</h1>
        <i className="material-icons feature-block__feature-icon">sentiment_dissatisfied</i>
        <p>К сожалению такой страницы не существует.</p>
        <Link className="not-found__link" to="/">
          Вернуться на главную страницу
        </Link>
      </main>
      <BigFooter />
      <SmallFooter />
    </div>
  );
};

export default NotFound;
