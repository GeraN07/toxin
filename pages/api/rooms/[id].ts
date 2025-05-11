import type { NextApiRequest, NextApiResponse } from 'next';

type Room = Record<string, any>;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;


  if (typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  try {
    const response = await fetch(`http://localhost:3001//api/rooms/${id}`);
 
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Room not found' });
    }

    const data: Room = await response.json();


    if (!data || Object.keys(data).length === 0) {
      return res.status(404).json({ error: 'Room not found' });
    }

    res.status(200).json(data);
  } catch (error: any) {
    console.error('❌ Ошибка при получении комнаты:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
}


