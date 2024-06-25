import './pagination.css';
import React from 'react';
const Pagination = ({
  roomsPerPage,
  totalRooms,
  paginate,
  currentPage,
  nextPage,
  prevPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalRooms / roomsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <section className="rooms-catalog__pagination-block">
      {pageNumbers.length > 1 && (
        <div className="pagination">
          <h3 className="pagination__title" />
          <ul className="pagination__list">
            {currentPage != 1 && (
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
                  currentPage == number ? 'current-page' : ''
                } `}
                key={number}
                onClick={() => paginate(number)}
              >
                {number}
              </li>
            ))}
            {currentPage != pageNumbers.length && (
              <li
                className="material-icons pagination__navigation"
                onClick={nextPage}
              >
                arrow_forward
              </li>
            )}
          </ul>
          <div className="pagination-data">
            {(currentPage != pageNumbers[0] &&
              roomsPerPage * (currentPage - 1) + 1) ||
              1}{' '}
            –{' '}
            {(currentPage != pageNumbers[pageNumbers.length - 1] &&
              roomsPerPage * currentPage) ||
              totalRooms}{' '}
            из {totalRooms} вариантов аренды
          </div>
        </div>
      )}
    </section>
  );
};
export default React.memo(Pagination);
// {currentPage!=pageNumbers[pageNumbers.length-1] && (roomsPerPage*currentPage) }
