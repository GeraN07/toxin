import BigFooter from '../../components/big-footer/big-footer';
import BookingCard from '../../cards/booking-card/booking-card';
import BulletList from '../../components/bullet-list/bullet-list';
import Feature from '../../components/features/feature';
import Feedback from '../../components/feedback/feedback';
import HeaderMain from '../../components/header-main/header-main';
import './room-details.css';
import SmallFooter from '../../components/small-footer/small-footer';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFullRoom } from '../../store/action';
import { useEffect } from 'react';
import Preloader from '../../components/preloader/preloader';

const RoomDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(setFullRoom(id));
    }
  }, [id, dispatch]);

  const room = useSelector(
    (state: { smoking: Boolean }) => state.filter.fullRoom
  );

  if (!room) {
    return <Preloader />;
  }

  const {imgArr, features, votes, feedback, price} = room
 const {pet} = room.checkboxes

  return (
    <div className="room-details">
      <Helmet>
        <title>room-details</title>
      </Helmet>
      <HeaderMain />

      <main className="room-details__block">
        <section className="room-details__room-image revealator-once">
          <img
            className="room-details__room-image-main"
            src={imgArr[0]}
            alt=""
          />
          <div className="room-details__room-image-small-block">
            <img
              className="room-details__image-small1"
              src={imgArr[1]}
              alt=""
            />
            <img
              className="room-details__image-small2"
              src={imgArr[2]}
              alt=""
            />
          </div>
        </section>
        <section className="room-details__details-book">
          <div className="room-details__room-details">
            <div className="room-details__features-block revealator-once">
              <h1 className="room-details__features-title">
                Сведения о номере
              </h1>
              {features.map((feature) => (
                <Feature feature={feature} key={feature.title}/>
              ))}
            </div>
            <div className="room-details__room-impressions revealator-once revealator-delay3">
              <h1 className="room-details__impressions-title">
                Впечатления от номера
              </h1>
              <div className="room-details__impressions-block">
                <figure className="chart" data-percent={room.totalRating}>
                  <svg width="120" height="121">
                    <g transform="scale(-1, 1), rotate(-90)">
                      <circle className="outer2" cx="-60" cy="-60" r="58" />
                      <circle className="outer1" cx="-60" cy="-60" r="58" />
                      <circle className="outer" cx="-60" cy="-60" r="58" />
                    </g>
                  </svg>
                  <p className="vote-count">
                    <span className="vote-count__number" id="nbr">
                      {votes}
                    </span>{' '}
                    <span className="vote-count__text">голосов</span>
                  </p>
                </figure>
                <div className="room-details__impressions-text-block">
                  <ul className="room-details__impressions-list">
                    <li className="room-details__impression-item1">
                      <p className="room-details__impression-list-text">
                        Великолепно
                      </p>
                    </li>
                    <li className="room-details__impression-item2">
                      <p className="room-details__impression-list-text">
                        Хорошо
                      </p>
                    </li>
                    <li className="room-details__impression-item3">
                      <p className="room-details__impression-list-text">
                        Удовлетворительно
                      </p>
                    </li>
                    <li className="room-details__impression-item4">
                      <p className="room-details__impression-list-text">
                        Разочарован
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="room-details__room-feedbacks revealator-fade revealator-once">
              <div className="room-details__feedback-header">
                <h1 className="room-details__feedback-title">
                  Отзывы посетителей номера
                </h1>
                <p className="room-details__feedbacks-count">{`${feedback.length} отзыва`}</p>
              </div>
              {feedback.map((feedback) => (
                <Feedback feedBack={feedback} key={feedback.name }/>
              ))}
            </div>
            <div className="room-details__room-rules revealator-fade revealator-once revealator-delay1">
              <h1 className="room-details__rules-title">Правила</h1>
              <BulletList pet={pet}  />
            </div>
            <div className="room-details__book-cancel revealator-fade revealator-once revealator-delay1">
              <h1 className="room-details__book-cancel-title">Отмена</h1>
              <p className="room-details__book-cancel-text">
                Бесплатная отмена в течение 48 ч. После этого при отмене не
                позднее чем за 5 дн. до прибытия вы получите полный возврат за
                вычетом сбора за услуги.
              </p>
            </div>
          </div>
          <div
            className="room-details__book-details revealator-fade revealator-once"
            id="room-book"
          >
            <BookingCard price={price}/>
          </div>
          <div className="room-details__book-anchor-button" id="anchor-button">
            <a className="room-details__anchor-button-text" href="#room-book">
              Забронировать !
            </a>
          </div>
        </section>
      </main>
      <BigFooter />
      <SmallFooter />
    </div>
  );
};

export default RoomDetails;
