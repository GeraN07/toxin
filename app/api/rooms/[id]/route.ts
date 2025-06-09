import { NextResponse } from 'next/server';
import { getCachedRooms } from '../../../utils/roomCache';
import { FullOffer } from '../../../types/rooms';

type Params = {
  params: {
    id: string;
  };
};

export async function GET(_: Request, { params }: Params) {
  const { fullRooms } = getCachedRooms();
  const fullRoom = fullRooms.find(
    (fullRoom: FullOffer) => fullRoom.id === params.id
  );

  if (!fullRoom) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(fullRoom);
}
