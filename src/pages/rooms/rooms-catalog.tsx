// RoomCatalog.tsx

import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import AsideFilters from '../../cards/aside-filters/aside-filters';
import BigFooter from '../../components/big-footer/big-footer';
import HeaderMain from '../../components/header-main/header-main';
import RoomsCatalogList from '../../components/catalog-block/catalog-block';
import Pagination from '../../components/pagination/pagination';
import SmallFooter from '../../components/small-footer/small-footer';
import { useSearchParams } from 'react-router-dom';
import {
  setSortedRooms,
  setMaxGuests,
  setAdultCount,
  setChildCount,
  setInfantCount,
  setDatesRange,
  setMinPrice,
  setMaxPrice,
  setSmoking,
  setPet,
  setGuests,
  setWideCoridor,
  setHelper,
  setBedrooms,
  setBeds,
  setBathrooms,
  setBreakfast,
  setTable,
  setHchair,
  setBabyBed,
  setTv,
  setShampoo,
} from '../../store/action';
import './rooms-catalog.css';
import { getAllRooms, getSortedRooms } from '../../store/selectors';
import Preloader from '../../components/preloader/preloader';
import { fetchRooms } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';

const RoomCatalog = () => {
  const [asideOpen, setAsideOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [roomsPerPage] = useState(12);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.has('maxGuests')) {
      dispatch(setMaxGuests(Number(searchParams.get('maxGuests'))));
    }
    if (searchParams.has('adultCount')) {
      dispatch(setAdultCount(Number(searchParams.get('adultCount'))));
    }
    if (searchParams.has('childCount')) {
      dispatch(setChildCount(Number(searchParams.get('childCount'))));
    }
    if (searchParams.has('infantCount')) {
      dispatch(setInfantCount(Number(searchParams.get('infantCount'))));
    }
    if (searchParams.has('datesRange')) {
      const datesRange = searchParams.get('datesRange');
      if (datesRange) dispatch(setDatesRange(datesRange.split(',')));
    }
    if (searchParams.has('minPrice')) {
      dispatch(setMinPrice(Number(searchParams.get('minPrice'))));
    }
    if (searchParams.has('maxPrice')) {
      dispatch(setMaxPrice(Number(searchParams.get('maxPrice'))));
    }
    if (searchParams.has('smoking')) {
      dispatch(setSmoking(searchParams.get('smoking') === 'true'));
    }
    if (searchParams.has('pet')) {
      dispatch(setPet(searchParams.get('pet') === 'true'));
    }
    if (searchParams.has('guests')) {
      dispatch(setGuests(searchParams.get('guests') === 'true'));
    }
    if (searchParams.has('wideCoridor')) {
      dispatch(setWideCoridor(searchParams.get('wideCoridor') === 'true'));
    }
    if (searchParams.has('helper')) {
      dispatch(setHelper(searchParams.get('helper') === 'true'));
    }
    if (searchParams.has('bedroomCount')) {
      dispatch(setBedrooms(Number(searchParams.get('bedroomCount'))));
    }
    if (searchParams.has('bedsCount')) {
      dispatch(setBeds(Number(searchParams.get('bedsCount'))));
    }
    if (searchParams.has('bathrooms')) {
      dispatch(setBathrooms(Number(searchParams.get('bathrooms'))));
    }
    if (searchParams.has('breakfast')) {
      dispatch(setBreakfast(searchParams.get('breakfast') === 'true'));
    }
    if (searchParams.has('table')) {
      dispatch(setTable(searchParams.get('table') === 'true'));
    }
    if (searchParams.has('hchair')) {
      dispatch(setHchair(searchParams.get('hchair') === 'true'));
    }
    if (searchParams.has('babyBed')) {
      dispatch(setBabyBed(searchParams.get('babyBed') === 'true'));
    }
    if (searchParams.has('tv')) {
      dispatch(setTv(searchParams.get('tv') === 'true'));
    }
    if (searchParams.has('shampoo')) {
      dispatch(setShampoo(searchParams.get('shampoo') === 'true'));
    }
  }, [searchParams, dispatch]);

  useEffect(() => {
    dispatch(setSortedRooms());
    setIsLoading(false);
  }, [dispatch]);

  const allRooms = useSelector(getAllRooms);
  const rooms = useSelector(getSortedRooms);

  useEffect(() => {
    if (allRooms.length < 1) {
      setIsLoading(true);
      dispatch(fetchRooms())
        .then(() => dispatch(setSortedRooms()))
        .finally(() => setIsLoading(false));
    }
  }, [dispatch, rooms.length]);

  useEffect(() => {
    setCurrentPage(1);
  }, [rooms]);

  const toggleAside = () => {
    setAsideOpen(!asideOpen);
  };

  const lastRoomIndex = currentPage * roomsPerPage;
  const firstRoomIndex = lastRoomIndex - roomsPerPage;
  const currentRooms = useMemo(
    () => rooms.slice(firstRoomIndex, lastRoomIndex),
    [rooms, firstRoomIndex, lastRoomIndex]
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const prevPage = () => setCurrentPage((prev) => prev - 1);
  const nextPage = () => setCurrentPage((prev) => prev + 1);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="rooms-catalog">
      <Helmet>
        <title>rooms-catalog</title>
      </Helmet>
      <HeaderMain />
      <main className="rooms-catalog__main">
        <div className="rooms-catalog__main-wrapper">
          <AsideFilters asideOpen={asideOpen} toggleAside={toggleAside} />
          <RoomsCatalogList toggleAside={toggleAside} rooms={currentRooms} />
          <Pagination
            roomsPerPage={roomsPerPage}
            totalRooms={rooms.length}
            paginate={paginate}
            currentPage={currentPage}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        </div>
      </main>
      <BigFooter />
      <SmallFooter />
    </div>
  );
};

const NamedRoomCatalog = React.memo(RoomCatalog);
export default NamedRoomCatalog;
