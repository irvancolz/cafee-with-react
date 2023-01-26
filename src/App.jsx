import React, { Suspense } from 'react';
import { Loading } from './components';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePages from './pages/home';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<HomePages />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
