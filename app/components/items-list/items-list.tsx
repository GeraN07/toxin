/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import ItemCard from '../cards/item-card/item-card';
import { Rooms } from '../../types/rooms';

type ItemsListProps = {
  rooms: Rooms;
};

const ItemsList = ({ rooms }: ItemsListProps) => (
  <>
    {rooms.map((room) => (
      <ItemCard key={room.id} room={room} />
    ))}
  </>
);

const areEqual = (prevProps: ItemsListProps, nextProps: ItemsListProps) => prevProps.rooms === nextProps.rooms;

export default React.memo(ItemsList, areEqual);
