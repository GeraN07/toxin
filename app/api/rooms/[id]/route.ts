import { NextResponse } from 'next/server';
import { getCachedRooms } from '../../../utils/roomCache';
import { FullOffer } from '../../../types/rooms';

export async function GET(
) {
  const { id } = context.params;
  const { fullRooms } = getCachedRooms();

  const fullRoom = fullRooms.find((room: FullOffer) => room.id === id);

  if (!fullRoom) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(fullRoom);
}