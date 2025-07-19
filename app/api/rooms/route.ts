import { NextResponse } from 'next/server';
import { Rooms } from '../../../app/types/rooms';
import { fetchWithRetry } from '../../utils/fetchWithRetry';

export async function GET() {
  try {
    const rooms = await fetchWithRetry<Rooms>(
      'https://toxin-git-react-redux-geran7s-projects.vercel.app/api/rooms'
    );

    if (!rooms || rooms.length === 0) {
      return NextResponse.json(
        { error: 'Комнаты не найдены' },
        { status: 404 }
      );
    }

    return NextResponse.json(rooms);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          error: 'Ошибка при получении комнат',
          details: error.message,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ error: 'Неизвестная ошибка' }, { status: 500 });
  }
}
