type Room = {
    id: string;
  };
  
  export async function getRooms(): Promise<Room[]> {
    try {
      const res = await fetch(`${process.env.BASE_API_URL}/api/rooms`);
      if (!res.ok) throw new Error(`Ошибка API: ${res.status}`);
      const data = await res.json();
      return data as Room[];
    } catch (error) {
      console.warn('⚠️ Не удалось получить комнаты. Используется fallback []');
      return [];
    }
  }
  