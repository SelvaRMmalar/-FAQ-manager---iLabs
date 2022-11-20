import { Route, Routes } from 'react-router-dom';
import App from '../layouts/App';
import LazyLoad from '../Components/LazyPage';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<LazyLoad page='Home' />} />
        <Route path='/create' element={<LazyLoad page='Create' />} />
      </Route>
    </Routes>
  );
}

export default Router;
