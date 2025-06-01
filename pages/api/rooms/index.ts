import type { NextApiRequest, NextApiResponse } from 'next';
import { Rooms } from '../../../app/types/rooms';
const fetchRoomsFromServer = async (): Promise<Rooms | undefined> => {
  try {
    const response = await fetch('http://localhost:3001/api/rooms', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = (await response.json()) as Rooms;
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(
        `Ошибка при загрузке данных с внешнего сервера: ${error.message}`
      );
    }
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const rooms = await fetchRoomsFromServer();
      if (!rooms || rooms.length === 0) {
        return res.status(404).json({ error: 'Комнаты не найдены' });
      }

      res.status(200).json(rooms);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({
          error: 'Ошибка при получении комнат',
          details: error.message,
        });
      }
    }
  } else {
    res.status(405).json({ message: 'Метод не разрешен' });
  }
}
