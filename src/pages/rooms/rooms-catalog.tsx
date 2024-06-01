import AsideFilters from '../../cards/aside-filters/aside-filters';
import BigFooter from '../../components/big-footer/big-footer';
import HeaderMain from '../../components/header-main/header-main';
import './rooms-catalog.css';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import RoomsCatalogList from '../../components/catalog-block/catalog-block';
import React from 'react';
import Pagination from '../../components/pagination/pagination';
import SmallFooter from '../../components/small-footer/small-footer';

const RoomCatalog = () => {
  const [asideOpen, setAsideOpen] = useState(false);

  const toggleAside = () => {
    setAsideOpen(!asideOpen);
  };

  return (
    <div className="rooms-catalog">
      <Helmet>
        <title>rooms-catalog</title>
      </Helmet>
      <HeaderMain />
      <main className="rooms-catalog__main">
        <div className="rooms-catalog__main-wrapper">
          <AsideFilters asideOpen={asideOpen} toggleAside={toggleAside} />
          <RoomsCatalogList toggleAside={toggleAside} />
          <Pagination />
        </div>
      </main>
      <BigFooter />
      <SmallFooter />
    </div>
  );
};

export default React.memo(RoomCatalog);
