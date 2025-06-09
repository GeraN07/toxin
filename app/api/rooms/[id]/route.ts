import { NextResponse } from 'next/server';
import { getCachedRooms } from '../../../utils/roomCache';
import type { NextRequest } from 'next/server';
import type { RouteContext } from 'next';
import { FullOffer } from '../../../types/rooms';

export async function GET(
  _: NextRequest,
  context: Awaited<RouteContext<{ id: string }>>
) {
  const params = await context.params;
  const id = params.id;

  const { fullRooms } = getCachedRooms();
  const fullRoom = fullRooms.find((room: FullOffer) => room.id === id);

  if (!fullRoom) {
    return NextResponse.json({ message: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(fullRoom);
}
