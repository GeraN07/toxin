import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { roomsSort } from '../../../filter';
import type { State } from '../../../types/state';
import { getCachedRooms } from '../../../utils/roomCache';

export async function POST(req: NextRequest) {
  try {
    const filters = (await req.json()) as State;
    if (!filters) {
      return NextResponse.json(
        { error: 'Filters are required' },
        { status: 400 }
      );
    }

    const { rooms } = getCachedRooms();

    if (!rooms || rooms.length === 0) {
      return NextResponse.json({ error: 'No rooms found' }, { status: 404 });
    }
    const sortedRooms = roomsSort(rooms, filters);
    return NextResponse.json(sortedRooms);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: 'Error filtering rooms', details: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
  }
}
