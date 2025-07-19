/* eslint-disable react-refresh/only-export-components */
'use client';
import StarRating from '../../star-rating/star-rating';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';

import './item-card.css';
import 'swiper/css';
import { Room } from '../../../types/rooms';
import Image from 'next/image';

type ItemCardProps = {
  room: Room;
};

const ItemCard = ({ room }: ItemCardProps) => {
  const { srcArr, id, roomNumber, lux, price, rating, reviews } = room;
  return (
    <div className="item-card" key={Math.random()}>
      <div className="image-slider">
        <ul className="slides">
          <Swiper
            className="slides"
            loop
            modules={[Navigation, Pagination, Mousewheel]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            mousewheel
          >
            {srcArr.map((src) => (
              <SwiperSlide key={Math.random()}>
                <li className="slide">
                  <Link className="image-slider__room-link" href={`rooms/${id}`}></Link>
                  <Image src={src} width={271} height={152} alt="" />
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
        <Link className="image-slider__room-link" href="/room-details"></Link>
      </div>
      <div className="item-card__footer">
        <div className="item-card__footer-top">
          <h1 className="item-card__title">
            {' '}
            <span className="item-card__number">№ </span>
            <span className="number__room-number">{roomNumber}</span>
            <span className="item-card__lux">{lux ? ' люкс' : ''}</span>
          </h1>
          <p
            className={
              price.length > 3
                ? 'item-card__dayprice thousand '
                : 'item-card__dayprice'
            }
          >
            {' '}
            <span className="dayprice__price">{`${price}₽`}</span>
            <span className="item-card__day"> в сутки</span>
          </p>
        </div>
        <div className="item-card__footer-bottom">
          <StarRating rating={rating} />

          <p className="item-card__reviews-count">
            <span>{`${reviews} `}</span>
            <span className="item-card__review">Отзывов</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const areEqual = (prevProps: ItemCardProps, nextProps: ItemCardProps) =>
  prevProps.room === nextProps.room;

export default React.memo(ItemCard, areEqual);
