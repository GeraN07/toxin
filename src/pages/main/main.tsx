import BigFooter from '../../components/big-footer/big-footer';
import FilterMain from '../../cards/filter-main/filter-main';
import HeaderMain from '../../components/header-main/header-main';
import './main.css';
import SmallFooter from '../../components/small-footer/small-footer';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { setRooms } from '../../store/action';


const Main = () => {
  const dispatch = useDispatch();


  dispatch(setRooms());
  return (
    <div className="landing-page">
      <Helmet>
        <title>main-page</title>
      </Helmet>
      <HeaderMain />
      <main className="landing-page__main-block">
        <div className="landing-page__filter-image">
          <div className="landing-page__filter-image-wrapper">
            <FilterMain />
            <p className="landing-page__filter-image-text">
              Лучшие номера для вашей работы, отдыха и просто вдохновения
            </p>
          </div>
        </div>
      </main>

      <BigFooter />
      <SmallFooter />
    </div>
  );
};

export default Main;
