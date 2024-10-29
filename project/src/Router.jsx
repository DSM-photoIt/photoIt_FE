import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PhotoShootPage, MainPage, PhotoCheckPage } from './pages';
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/photoshoot" element={<PhotoShootPage />} />
        <Route path="/photocheck" element={<PhotoCheckPage />} />
      </Routes>
    </BrowserRouter>
  );
};
