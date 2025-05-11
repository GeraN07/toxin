import BigFooter from '../components/big-footer/big-footer';
import HeaderMain from '../components/header-main/header-main';
import SmallFooter from '../components/small-footer/small-footer';
import './rooms-catalog.css';
import ClientRoomsCatalogList from '../components/client-rooms-catalog-list/client-rooms-catalog-list';

export const metadata = {
  title: 'Каталог номеров',
  description: 'Лучшие номера в нашем отеле',
};

type RoomCatalogProps = {
  searchParams?: { [key: string]: string };
};

const RoomCatalog = async ({ searchParams }: RoomCatalogProps) => {

  const hasSearchParams = searchParams && Object.keys(searchParams).length > 0;

const filters = hasSearchParams
  ? {
      maxPrice: searchParams.maxPrice ? Number(searchParams.maxPrice) : undefined,
      minPrice: searchParams.minPrice ? Number(searchParams.minPrice) : undefined,
      maxGuests: searchParams.maxGuests ? Number(searchParams.maxGuests) : undefined,
      adultCount: searchParams.adultCount ? Number(searchParams.adultCount) : undefined,
      childCount: searchParams.childCount ? Number(searchParams.childCount) : undefined,
      infantCount: searchParams.infantCount ? Number(searchParams.infantCount) : undefined,
      datesRange: searchParams.datesRange ? searchParams.datesRange.split(',') : undefined,
      smoking: searchParams.smoking === 'true',
      pet: searchParams.pet === 'true',
      guests: searchParams.guests === 'true',
      wideCoridor: searchParams.wideCoridor === 'true',
      helper: searchParams.helper === 'true',
      bedroomCount: searchParams.bedroomCount ? Number(searchParams.bedroomCount) : undefined,
      bedsCount: searchParams.bedsCount ? Number(searchParams.bedsCount) : undefined,
      bathRoomsCount: searchParams.bathRoomsCount ? Number(searchParams.bathRoomsCount) : undefined,
      breakfast: searchParams.breakfast === 'true',
      table: searchParams.table === 'true',
      hchair: searchParams.hchair === 'true',
      babyBed: searchParams.babyBed === 'true',
      tv: searchParams.tv === 'true',
      shampoo: searchParams.shampoo === 'true',
    }
  : null; // null если нет фильтров


  return (
    <div className="rooms-catalog">
    <HeaderMain />
    <main className="rooms-catalog__main">
      <div className="rooms-catalog__main-wrapper">
        <ClientRoomsCatalogList  searchParams={filters || {}} />
      </div>
    </main>
    <BigFooter />
    <SmallFooter />
  </div>
);
};

export default RoomCatalog;
