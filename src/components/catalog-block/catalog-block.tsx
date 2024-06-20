import { setRooms, setSortedRooms } from '../../store/action'; // Убедитесь, что импортируете setSortedRooms
import { Rooms } from '../../types/rooms';
import { AsideOpenButton, ButtonPurpleLarge } from '../buttons/buttons';
import ItemsList from '../items-list/items-list';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

type RoomsCatalogListProps = {
  toggleAside: () => void;
  rooms: Rooms
};

const RoomsCatalogList = ({ toggleAside, rooms }: RoomsCatalogListProps) => {
  const [showButton, setShowButton] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200 && window.innerWidth < 1161);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="rooms-catalog__catalog-block">
      <h1 className="rooms-catalog__catalog-block-title">
        Номера, которые мы для вас подобрали
        <ButtonPurpleLarge name="фильтры" link="" onClick={toggleAside} />
      </h1>
      <ItemsList rooms={rooms}/>
      {showButton && <AsideOpenButton name="" onClick={toggleAside} />}
    </section>
  );
};

export default RoomsCatalogList;
