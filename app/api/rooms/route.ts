import { NextResponse } from 'next/server';
import { getCachedRooms } from '../../utils/roomCache';

export async function GET() {
  const { rooms } = getCachedRooms();
  try {
    if (!rooms?.length) {
      return NextResponse.json(
        { error: 'Комнаты не найдены' },
        { status: 404 }
      );
    }

    return NextResponse.json(rooms);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: 'Ошибка при получении комнат', details: error.message },
        { status: 500 }
      );
    }
    return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
  }
}
