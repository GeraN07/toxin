import { useState } from 'react';
import BigFooter from '../../components/big-footer/big-footer';
import BookingCard from '../../cards/booking-card/booking-card';
import HeaderMain from '../../components/header-main/header-main';
import './room-details.css';
import SmallFooter from '../../components/small-footer/small-footer';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Preloader from '../../components/preloader/preloader';
import { getFullRoom } from '../../store/selectors';
import { fetchRoomById } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import RoomImpressions from '../../components/room-impressions/room-impressions';
import Feedbacks from '../../components/feedbacks/feedbacks';
import RoomImages from '../../components/room-images/room-images';
import Features from '../../components/features/features';
import RoomInformation from '../../components/room-information/room-information';

const RoomDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (id) {
      dispatch(fetchRoomById(id)).finally(() => setIsLoading(false));
    }
  }, [id, dispatch]);

  const room = useSelector(getFullRoom);

  if (!room || isLoading) {
    return <Preloader />;
  }

  const {
    imgArr,
    features,
    votes,
    feedback,
    price,
    maxGuests,
    dates,
    totalRating,
  } = room;
  const { pet } = room.checkboxes;

  return (
    <div className="room-details">
      <Helmet>
        <title>room-details</title>
      </Helmet>
      <HeaderMain />
      <main className="room-details__block">
        <RoomImages imgArr={imgArr} />
        <section className="room-details__details-book">
          <div className="room-details__room-details">
            <Features features={features} />
            <RoomImpressions totalRationg={totalRating} votes={votes} />
            <Feedbacks feedBacks={feedback} />
            <RoomInformation pet={pet} />
          </div>
          <div className="room-details__book-details" id="room-book">
            <BookingCard
              price={price}
              maxGuests={maxGuests}
              availableDates={dates}
            />
          </div>
        </section>
      </main>
      <BigFooter />
      <SmallFooter />
    </div>
  );
};

export default RoomDetails;
