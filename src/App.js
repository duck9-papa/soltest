import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './pages/main/Main';
import Detail from './pages/detail/Detail';
import store from './modules/ConfigureStore';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
