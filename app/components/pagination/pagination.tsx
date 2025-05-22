'use client';

import './pagination.css';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

type PaginationProps = {
  totalRooms: number;
  roomsPerPage: number;
};

const Pagination = ({ totalRooms, roomsPerPage }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const totalPages = Math.ceil(totalRooms / roomsPerPage);

  const paginate = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', pageNumber.toString());
    router.push(`/rooms-catalog?${params.toString()}`, { scroll: false });
  };

  const prevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <section className="rooms-catalog__pagination-block">
      {totalPages > 1 && (
        <div className="pagination">
          <h3 className="pagination__title" />
          <ul className="pagination__list">
            {currentPage !== 1 && (
              <li
                className="material-icons pagination__navigation"
                onClick={prevPage}
              >
                arrow_backward
              </li>
            )}
            {pageNumbers.map((number) => (
              <li
                className={`pagination__item ${
                  currentPage === number ? 'current-page' : ''
                } `}
                key={number}
                onClick={() => paginate(number)}
              >
                {number}
              </li>
            ))}
            {currentPage !== totalPages && (
              <li
                className="material-icons pagination__navigation"
                onClick={nextPage}
              >
                arrow_forward
              </li>
            )}
          </ul>
          <div className="pagination-data">
            {(currentPage - 1) * roomsPerPage + 1} –{' '}
            {Math.min(currentPage * roomsPerPage, totalRooms)} из {totalRooms}{' '}
            вариантов аренды
          </div>
        </div>
      )}
    </section>
  );
};

export default React.memo(Pagination);
