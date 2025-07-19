import { Rooms } from '../types/rooms';
import { fetchWithRetry } from './fetchWithRetry';

export async function getRooms(): Promise<Rooms> {
  try {
    const rooms = await fetchWithRetry<Rooms>(
      'https://toxin-git-react-redux-geran7s-projects.vercel.app/api/rooms'
    );

    if (!rooms || rooms.length === 0) {
      throw new Error('Комнаты не найдены');
    }

    return rooms;
  } catch (error) {
    return [];
  }
}
