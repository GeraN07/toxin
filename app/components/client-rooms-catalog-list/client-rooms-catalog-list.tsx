  'use client';
  import { useEffect, useState, useMemo, useRef } from 'react';
  import { useSearchParams } from 'next/navigation'; 
  import ComponentPreloader from '../component-preloader/component-preloader';
  import RoomsCatalogList from '../catalog-block/catalog-block';
  import Pagination from '../pagination/pagination';
  import AsideFilters from '../cards/aside-filters/aside-filters';

  type Props = {
    searchParams: { [key: string]: string };
  };

  const ClientRoomsCatalogList = ({ searchParams }: Props) => {
    const [asideOpen, setAsideOpen] = useState(false);
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [delayedParams, setDelayedParams] = useState<{ [key: string]: string } | null>(null);

    const memoizedFilters = useMemo(() => searchParams, [JSON.stringify(searchParams)]);
    const prevFiltersRef = useRef<string | null>(null);

    // Задержку перед запросом (если параметры пустые)
    useEffect(() => {
      let timeoutId: NodeJS.Timeout;

      if (Object.keys(searchParams).length === 0) {
        setLoading(true);
        timeoutId = setTimeout(() => {
          setDelayedParams({});
        }, 500);
      } else {
        setDelayedParams(searchParams);
      }

      return () => clearTimeout(timeoutId);
    }, [searchParams]);

    useEffect(() => {
      const filtersString = JSON.stringify(delayedParams);

      if (delayedParams === null || prevFiltersRef.current === filtersString) return;

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
   

    const newParams = useSearchParams()
    const params: { [key: string]: string } = {};
    newParams.forEach((value, key) => {
      params[key] = value;
    });
    const currentPage = Number(params?.page) || 1;

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
            <RoomsCatalogList  toggleAside={toggleAside}  rooms={currentRooms} />
            <Pagination totalRooms={totalRooms} roomsPerPage={roomsPerPage} />
          </>
        )}
      </>
    );
  };

  export default ClientRoomsCatalogList;
