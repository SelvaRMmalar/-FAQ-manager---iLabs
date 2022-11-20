import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useStore } from './store';
import Router from './router';
import Loading from './Components/Loading';
function App() {
  const storeData = useStore();
  return (
    <>
      {storeData.store ? (
        <Provider store={storeData.store}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Provider>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
