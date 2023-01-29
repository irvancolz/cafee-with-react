import './App.css';
import { lazy, useRef } from 'react';
import { Loading, Navigation } from './components'
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

const HomePages = lazy(() => import("./pages/home/index.jsx"));
const FavouritePages = lazy(() => import("./pages/favourite"));
const NotFoundPages = lazy(() => import("./pages/not-found"));
const RestaurantDetailPages = lazy(() => import("./pages/restaurant-detail"));
const RestaurantsPages = lazy(() => import("./pages/restaurants"));

function App() {

  const mainRef = useRef(null)

  return (
    <Suspense fallback={<Loading />}>
      <a href='#App' onClick={() => console.log(mainRef)} className='skip-to-content'>Skip to Content</a>
      <header>
        <Navigation />
      </header>
      <main ref={mainRef} tabIndex="0" className="App" id='App'>

        <Routes>
          <Route path='/' element={<HomePages />} />
          <Route path='/restaurants/:id' element={<RestaurantDetailPages />} />
          <Route path='/restaurants' element={<RestaurantsPages />} />
          <Route path='/favourites' element={<FavouritePages />} />
          <Route path='*' element={<NotFoundPages />} />
        </Routes>
      </main>
      <footer>
        <h2>footer</h2>
      </footer>
    </Suspense>
  );
}

export default App;
