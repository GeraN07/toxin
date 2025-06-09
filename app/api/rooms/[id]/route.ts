import { NextResponse } from 'next/server';
import { generateFullRooms } from '../../../utils/roomCache';
import { FullOffer } from '../../../types/rooms';

export async function GET(_request: Request, context: any) {
  const { id } = context.params;

  const fullRooms = generateFullRooms();
  console.log(fullRooms)
  const fullRoom = fullRooms.find((room: FullOffer) => room.id === id);
  console.log(fullRoom)
  if (!fullRoom) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(fullRoom);
}
