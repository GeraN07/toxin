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
        key={Math.random()}
        room={room}

      />
    ))}
  </>
);


const NamedItemsList = React.memo(ItemsList);
export default NamedItemsList;
