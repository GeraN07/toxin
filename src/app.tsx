import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './pages/main/main';
import RoomCatalog from './pages/rooms/rooms-catalog';
import RoomDetails from './pages/room/room-details';
import LoginPage from './pages/login/login-page';
import NotFound from './pages/not-found/not-found';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path={'/rooms-catalog'} element={<RoomCatalog />} />
      <Route path={'/room-details/:id'} element={<RoomDetails />} />
      <Route path={'/login'} element={<LoginPage />} />
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
export default App;


