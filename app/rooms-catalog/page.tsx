/* eslint-disable react-refresh/only-export-components */
import BigFooter from '../components/big-footer/big-footer';
import { Suspense } from 'react';
import HeaderMain from '../components/header-main/header-main';
import SmallFooter from '../components/small-footer/small-footer';
import ClientRoomsCatalogList from '../components/client-rooms-catalog-list/client-rooms-catalog-list';
import './rooms-catalog.css';
import ComponentPreloader from '../components/component-preloader/component-preloader';

export const metadata = {
  title: 'Каталог номеров',
  description: 'Лучшие номера в нашем отеле',
};

const RoomCatalog = () => (
  <div className="rooms-catalog">
    <HeaderMain />
    <main className="rooms-catalog__main">
      <div className="rooms-catalog__main-wrapper">
        <Suspense fallback={<ComponentPreloader />}>
          <ClientRoomsCatalogList />
        </Suspense>
      </div>
    </main>
    <BigFooter />
    <SmallFooter />
  </div>
);

export default RoomCatalog;
