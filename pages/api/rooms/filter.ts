import { NextApiRequest, NextApiResponse } from 'next';
import { roomsSort } from '../../../app/filter';
import { Rooms } from '../../../app/types/rooms';
import { State } from '../../../app/types/state';

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

    return await response.json() as Rooms;
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
  if (req.method === 'POST') {
    const filters = req.body as State;

    if (!filters) {
      return res.status(400).json({ error: 'Filters are required' });
    }

    try {
      const rooms = await fetchRoomsFromServer();

      if (!rooms || rooms.length === 0) {
        return res.status(404).json({ error: 'No rooms found' });
      }

      const sortedRooms = roomsSort(rooms, filters);

      res.status(200).json(sortedRooms);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res
          .status(500)
          .json({ error: 'Error filtering rooms', details: error.message });
      }
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
