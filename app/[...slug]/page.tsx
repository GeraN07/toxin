import { notFound } from 'next/navigation';

const CatchAllRoute = () => {
  notFound();
  return null;
};

export default CatchAllRoute;
