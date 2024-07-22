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
import { setSortedRooms } from '../../store/action';
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
  const currentRooms = useMemo(() => rooms.slice(firstRoomIndex, lastRoomIndex), [rooms, firstRoomIndex, lastRoomIndex]);

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
