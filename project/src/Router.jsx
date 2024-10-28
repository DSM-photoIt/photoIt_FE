import { MainPage } from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PhotoShootPage } from './pages';
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/photoshoot" element={<PhotoShootPage />} />
      </Routes>
    </BrowserRouter>
  );
};
