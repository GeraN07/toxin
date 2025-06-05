'use client';

import { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import ComponentPreloader from '../component-preloader/component-preloader';
import RoomsCatalogList from '../catalog-block/catalog-block';
import Pagination from '../pagination/pagination';
import AsideFilters from '../cards/aside-filters/aside-filters';
import { Rooms } from '../../types/rooms';

type StateData = number | boolean | undefined | string[] | undefined[];

const ClientRoomsCatalogList = () => {
  const [asideOpen, setAsideOpen] = useState(false);
  const [rooms, setRooms] = useState<Rooms>([]);
  const [loading, setLoading] = useState(false);
  const [delayedParams, setDelayedParams] = useState<{ [key: string]: StateData } | null>(null);

  const searchParams = useSearchParams();
  const params = useMemo(() => {
    const result: { [key: string]: string } = {};
    searchParams.forEach((value, key) => {
      result[key] = value;
    });
    return result;
  }, [searchParams]);

  const filters = useMemo(() => ({
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
    bedroomCount: params.bedroomCount ? Number(params.bedroomCount) : undefined,
    bedsCount: params.bedsCount ? Number(params.bedsCount) : undefined,
    bathRoomsCount: params.bathRoomsCount ? Number(params.bathRoomsCount) : undefined,
    breakfast: params.breakfast === 'true',
    table: params.table === 'true',
    hchair: params.hchair === 'true',
    babyBed: params.babyBed === 'true',
    tv: params.tv === 'true',
    shampoo: params.shampoo === 'true',
  }), [params]);

  const prevFiltersRef = useRef<string | null>(null);

  const fetchRooms = useCallback(async () => {
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

      const data = (await response.json()) as Rooms;
      setRooms(data);
    } catch (error) {
      setRooms([]);
    }
    setLoading(false);
  }, [delayedParams]);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setDelayedParams(filters);
    }, Object.keys(params).length === 0 ? 500 : 0);

    return () => clearTimeout(timeoutId);
  }, [filters, params]);

  useEffect(() => {
    const filtersString = JSON.stringify(delayedParams);
    if (delayedParams === null || prevFiltersRef.current === filtersString) {
      return;
    }

    prevFiltersRef.current = filtersString;
    fetchRooms();
  }, [delayedParams, fetchRooms]);

  const currentPage = Number(params.page) || 1;
  const roomsPerPage = 12;
  const totalRooms = rooms.length;
  const startIndex = (currentPage - 1) * roomsPerPage;
  const currentRooms = rooms.slice(startIndex, startIndex + roomsPerPage);

  const toggleAside = () => setAsideOpen((prev) => !prev);

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
