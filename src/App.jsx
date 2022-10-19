import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/index.scss';

import Main from './pages/main-page';
import Counter from './pages/counter-page';
import Quiz from './pages/quiz-page';
import UserList from './pages/user-list-page';
import Converter from './pages/converter-page';
import Photos from './pages/photos-page';
import Modal from './pages/modal-page';
import NotFound from './pages/not-found-page';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/converter" element={<Converter />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
