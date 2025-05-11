'use client';
import { useEffect, useState, useCallback } from 'react';
import ItemsList from '../items-list/items-list';
import { Rooms } from '../../types/rooms';
import { AsideOpenButton, ButtonPurpleLarge } from '../buttons/buttons';

type RoomsCatalogListProps = {
  rooms: Rooms;
  toggleAside: () => void;
};

const RoomsCatalogList = ({ toggleAside, rooms }: RoomsCatalogListProps) => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = useCallback(() => {
    if (typeof window !== 'undefined') {
    setShowButton(window.scrollY > 200 && window.innerWidth < 1161);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }
  }, [handleScroll]);

  return (
    <section className="rooms-catalog__catalog-block">
      <h1 className="rooms-catalog__catalog-block-title">
        {rooms.length < 1
          ? 'Извините, по вашим критериям не найдено подходящих номеров.'
          : 'Номера, которые мы для вас подобрали'}
        <ButtonPurpleLarge name="фильтры" link="" onClick={toggleAside} />
      </h1>
      <ItemsList rooms={rooms} />
      {showButton && <AsideOpenButton name="" onClick={toggleAside} />}
    </section>
  );
};

export default RoomsCatalogList;
