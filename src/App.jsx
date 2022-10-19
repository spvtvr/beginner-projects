import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/index.scss';

import MainPage from './pages/main-page';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>

      </Route>
    </Routes>
  );
}
