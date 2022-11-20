import Footer from '../../Components/Footer';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className=' bg-gray-200 min-h-screen'>
      <div className='min-h-full flex flex-col bg-white md:container mx-auto'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
