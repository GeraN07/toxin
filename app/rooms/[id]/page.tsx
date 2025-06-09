/* eslint-disable react-refresh/only-export-components */
export const dynamic = 'force-dynamic';
import BigFooter from '../../components/big-footer/big-footer';
import BookingCard from '../../components/cards/booking-card/booking-card';
import HeaderMain from '../../components/header-main/header-main';
import './room-details.css';
import SmallFooter from '../../components/small-footer/small-footer';
import RoomImpressions from '../../components/room-impressions/room-impressions';
import Feedbacks from '../../components/feedbacks/feedbacks';
import RoomImages from '../../components/room-images/room-images';
import Features from '../../components/features/features';
import RoomInformation from '../../components/room-information/room-information';
import ComponentPreloader from '../../components/component-preloader/component-preloader';
import { notFound } from 'next/navigation';
import { getBaseUrl } from '../../utils/getBaseUrl';
import { getRooms } from '../../utils/getRooms';
import { FullOffer } from '../../types/rooms';

export const metadata = {
  title: 'Номер',
  description: 'Лучшие номера в нашем отеле',
};
type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const rooms = await getRooms();
  return rooms.map((room) => ({
    id: room.id,
  }));
}
async function fetchRoomData(id: string): Promise<FullOffer | null> {
  try {
    const res = await fetch(`${await getBaseUrl()}/api/rooms/${id}`, {
      cache: 'force-cache',
    });

    if (!res.ok) {
      return null;
    }
    const data = (await res.json()) as FullOffer;
    return data;
  } catch (error) {
    return null;
  }
}

export default async function RoomDetails({ params }: Props) {
  const resolvedParams = await params;
  const room = await fetchRoomData(resolvedParams.id);

  if (!room) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    notFound();
  }

  if (!room) {
    return <ComponentPreloader />;
  }

  return (
    <div className="room-details">
      <HeaderMain />
      <main className="room-details__block">
        <RoomImages imgArr={room.imgArr} />
        <section className="room-details__details-book">
          <div className="room-details__room-details">
            <Features features={room.features} />
            <RoomImpressions
              totalRationg={room.totalRating}
              votes={room.votes}
            />
            <Feedbacks feedBacks={room.feedback} />
            <RoomInformation pet={room.checkboxes.pet} />
          </div>
          <div className="room-details__book-details" id="room-book">
            <BookingCard
              price={room.price}
              maxGuests={room.maxGuests}
              availableDates={room.dates}
            />
          </div>
        </section>
      </main>
      <BigFooter />
      <SmallFooter />
    </div>
  );
}
