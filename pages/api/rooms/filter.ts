import { NextApiRequest, NextApiResponse } from 'next';
import { roomsSort } from '../../../app/filter'; 

const fetchRoomsFromServer = async () => {
  try {
    console.log('Запрос на внешний сервер: http://localhost:3001/api/rooms');
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

    return await response.json();
  } catch (error: any) {
    console.error('Ошибка при загрузке данных с внешнего сервера:', error);
    throw new Error('Ошибка при загрузке данных с внешнего сервера: ' + error.message);
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const filters = req.body;
    console.log('Фильтры, полученные от клиента:', filters);

    if (!filters) {
      return res.status(400).json({ error: 'Filters are required' });
    }

    try {
      console.log('Получаем данные с внешнего сервера...');
      const rooms = await fetchRoomsFromServer();
      console.log('Полученные комнаты:', rooms.length);

      if (!rooms || rooms.length === 0) {
        return res.status(404).json({ error: 'No rooms found' });
      }

      console.log(' Фильтры переданные в сортировку:', filters);
      const sortedRooms = roomsSort(rooms, filters);
      console.log(' Отсортированные комнаты:', sortedRooms.length);

      res.status(200).json(sortedRooms);
    } catch (error: any) {
      console.error('Ошибка при обработке запроса:', error);
      res.status(500).json({ error: 'Error filtering rooms', details: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
