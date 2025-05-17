'use client';

import { useEffect, useState, useMemo, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import ComponentPreloader from '../component-preloader/component-preloader';
import RoomsCatalogList from '../catalog-block/catalog-block';
import Pagination from '../pagination/pagination';
import AsideFilters from '../cards/aside-filters/aside-filters';

const ClientRoomsCatalogList = () => {
  const [asideOpen, setAsideOpen] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [delayedParams, setDelayedParams] = useState<{
    [key: string]: any;
  } | null>(null);

  const searchParams = useSearchParams();
  const params: { [key: string]: string } = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  const filters = useMemo(() => {
    return {
      maxPrice: params.maxPrice ? Number(params.maxPrice) : undefined,
      minPrice: params.minPrice ? Number(params.minPrice) : undefined,
      maxGuests: params.maxGuests ? Number(params.maxGuests) : undefined,
      adultCount: params.adultCount ? Number(params.adultCount) : undefined,
      childCount: params.childCount ? Number(params.childCount) : undefined,
      infantCount: params.infantCount ? Number(params.infantCount) : undefined,
      datesRange: params.datesRange ? params.datesRange.split(',') : undefined,
      smoking: params.smoking === 'true',
      pet: params.pet === 'true',
      guests: params.guests === 'true',
      wideCoridor: params.wideCoridor === 'true',
      helper: params.helper === 'true',
      bedroomCount: params.bedroomCount
        ? Number(params.bedroomCount)
        : undefined,
      bedsCount: params.bedsCount ? Number(params.bedsCount) : undefined,
      bathRoomsCount: params.bathRoomsCount
        ? Number(params.bathRoomsCount)
        : undefined,
      breakfast: params.breakfast === 'true',
      table: params.table === 'true',
      hchair: params.hchair === 'true',
      babyBed: params.babyBed === 'true',
      tv: params.tv === 'true',
      shampoo: params.shampoo === 'true',
    };
  }, [JSON.stringify(params)]);

  const prevFiltersRef = useRef<string | null>(null);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(
      () => {
        setDelayedParams(filters);
      },
      Object.keys(params).length === 0 ? 500 : 0
    );

    return () => clearTimeout(timeoutId);
  }, [filters]);

  useEffect(() => {
    const filtersString = JSON.stringify(delayedParams);

    if (delayedParams === null || prevFiltersRef.current === filtersString)
      return;

    prevFiltersRef.current = filtersString;
    fetchRooms();
  }, [delayedParams]);

  const fetchRooms = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/rooms/filter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(delayedParams),
        cache: 'no-cache',
      });

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }

      const data = await response.json();
      setRooms(data);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
      setRooms([]);
    }
    setLoading(false);
  };

  const currentPage = Number(params.page) || 1;
  const roomsPerPage = 12;
  const totalRooms = rooms.length;
  const startIndex = (currentPage - 1) * roomsPerPage;
  const currentRooms = rooms.slice(startIndex, startIndex + roomsPerPage);

  const toggleAside = () => {
    setAsideOpen(!asideOpen);
  };

  return (
    <>
      <AsideFilters asideOpen={asideOpen} toggleAside={toggleAside} />
      {loading ? (
        <ComponentPreloader />
      ) : (
        <>
          <RoomsCatalogList toggleAside={toggleAside} rooms={currentRooms} />
          <Pagination totalRooms={totalRooms} roomsPerPage={roomsPerPage} />
        </>
      )}
    </>
  );
};

export default ClientRoomsCatalogList;
