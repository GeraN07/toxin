import { NextResponse } from 'next/server';
import { FullOffer } from '../../../types/rooms';
import { fetchWithRetry } from '../../../utils/fetchWithRetry';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();

  if (!id) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }
  try {
    const data = await fetchWithRetry<FullOffer>(
      `https://toxin-git-react-redux-geran7s-projects.vercel.app/api/rooms/${id}`
    );

    if (!data || Object.keys(data).length === 0) {
      return NextResponse.json({ error: 'Room not found' }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: 'Server error', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
  }
}
