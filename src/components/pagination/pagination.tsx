import './pagination.css';
import React from 'react';
const Pagination = () => (
  <section className="rooms-catalog__pagination-block">
    <div className="pagination">
      <h3 className="pagination__title" />
      <ul className="pagination__list">
        <li className="pagination__item current-page">1</li>
        <li className="pagination__item">2</li>
        <li className="pagination__item">3</li>
        <li className="pagination__item skip-item">...</li>
        <li className="pagination__item">15</li>
        <li className="material-icons pagination__navigation">
            arrow_forward
        </li>
      </ul>
      <div className="pagination-data">1 – 12 из 100+ вариантов аренды</div>
    </div>
  </section>
);
export default React.memo(Pagination);
