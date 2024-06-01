import StarRating from '../../components/star-rating/star-rating';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import './item-card.css';
import 'swiper/css';

type ItemCardProps = {
  number: string;
  price: string;
  reviews: string;
  srcArr: string[];
  rating: string;
  lux?: boolean;
};

const ItemCard = ({
  number,
  price,
  reviews,
  srcArr,
  rating,
  lux,
}: ItemCardProps) => (
  <div className="item-card">
    <div className="image-slider">
      <ul className="slides">
        <Swiper
          className="slides"
          loop
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {srcArr.map((src) => (
            <SwiperSlide>
              <li className="slide">
                <a
                  className="image-slider__room-link"
                  href="/room-details"
                >
                </a>
                <img src={src} alt="" />
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </ul>
      <a className="image-slider__room-link" href="/room-details"></a>
    </div>
    <div className="item-card__footer">
      <div className="item-card__footer-top">
        <h1 className="item-card__title">
          {' '}
          <span className="item-card__number">№ </span>
          <span className="number__room-number">{number}</span>
          <span className="item-card__lux">{lux ? ' люкс' : ''}</span>
        </h1>
        <p className="item-card__dayprice">
          {' '}
          <span className="dayprice__price">{`${price }₽`}</span>
          <span className="item-card__day"> в сутки</span>
        </p>
      </div>
      <div className="item-card__footer-bottom">
        <StarRating rating={rating} />

        <p className="item-card__reviews-count">
          <span>{`${reviews } `}</span>
          <span className="item-card__review">Отзывов</span>
        </p>
      </div>
    </div>
  </div>
);

export default ItemCard;
