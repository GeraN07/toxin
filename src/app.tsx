import { Route, Routes } from 'react-router-dom';
import Main from './pages/main/main';
import RoomCatalog from './pages/rooms/rooms-catalog';
import RoomDetails from './pages/room/room-details';
import LoginPage from './pages/login/login-page';
import NotFound from './pages/not-found/not-found';

const App = () => (
  <Routes>
    <Route path='/' element={<Main />} />
    <Route path='/rooms-catalog' element={<RoomCatalog />} />
    <Route path='/room-details/:id' element={<RoomDetails />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/not-found' element={<NotFound />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
);

export default App;
