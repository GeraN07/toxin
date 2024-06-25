import { Rooms } from '../../types/rooms';
import { AsideOpenButton, ButtonPurpleLarge } from '../buttons/buttons';
import ItemsList from '../items-list/items-list';
import { useEffect, useState, useCallback, useMemo } from 'react';

type RoomsCatalogListProps = {
  toggleAside: () => void;
  rooms: Rooms;
};

const RoomsCatalogList = ({ toggleAside, rooms }: RoomsCatalogListProps) => {
  const [showButton, setShowButton] = useState(false);

  const text = useMemo(() => {
    return rooms.length < 1
      ? "Извините, по вашим критериям не найдено подходящих номеров. Попробуйте изменить параметры фильтра."
      : "Номера, которые мы для вас подобрали";
  }, [rooms.length]);

  const handleScroll = useCallback(() => {
    setShowButton(window.scrollY > 200 && window.innerWidth < 1161);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <section className="rooms-catalog__catalog-block">
      <h1 className="rooms-catalog__catalog-block-title">
        {text}
        <ButtonPurpleLarge name="фильтры" link="" onClick={toggleAside} />
      </h1>
      <ItemsList rooms={rooms} />
      {showButton && <AsideOpenButton name="" onClick={toggleAside} />}
    </section>
  );
};

export default RoomsCatalogList;
