import { NextResponse } from 'next/server';
import { roomsSort } from '../../../filter';
import type { Rooms } from '../../../types/rooms';
import type { State } from '../../../types/state';
import { fetchWithRetry } from '../../../utils/fetchWithRetry';

export async function POST(req: Request) {
  try {
    const filters = (await req.json()) as State;

    if (!filters) {
      return NextResponse.json({ error: 'Filters are required' }, { status: 400 });
    }

    const rooms = await fetchWithRetry<Rooms>(
      'https://toxin-git-react-redux-geran7s-projects.vercel.app/api/rooms'
    );

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
