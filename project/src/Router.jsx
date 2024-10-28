import { MainPage } from './pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};
