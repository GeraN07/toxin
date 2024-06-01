import React from 'react';
import ItemCard from '../../cards/item-card/item-card';
import { Rooms } from '../../types/rooms';
type ItemsListProps = {
  rooms: Rooms;
};
const ItemsList = ({ rooms }: ItemsListProps) => (
  <>
    {rooms.map((room) => (
      <ItemCard
        number={room.roomNumber}
        price={room.price}
        reviews={room.reviews}
        srcArr={room.srcArr}
        rating={room.rating}
        lux={room.lux}
      />
    ))}
  </>
);

export default React.memo(ItemsList);
