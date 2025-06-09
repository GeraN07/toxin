import { Rooms } from '../types/rooms';
import { getBaseUrl } from './getBaseUrl';

export async function getRooms(): Promise<Rooms> {
  try {
    const res = await fetch(`${await getBaseUrl()}/api/rooms`);
    if (!res.ok) {
      throw new Error(`Ошибка API: ${res.status}`);
    }
    const data = (await res.json()) as Rooms;
    return data;
  } catch (error) {
    return [];
  }
}
