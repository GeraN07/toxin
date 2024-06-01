import createRooms from '../../mocks/rooms';
import { AsideOpenButton, ButtonPurpleLarge } from '../buttons/buttons';
import ItemsList from '../items-list/items-list';
import { useEffect, useState } from 'react';

type RoomsCatalogListProps = {
  toggleAside: () => void;
};

const RoomsCatalogList = ({ toggleAside }: RoomsCatalogListProps) => {
  const [showButton, setShowButton] = useState(false);
  const rooms = createRooms(12);
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
