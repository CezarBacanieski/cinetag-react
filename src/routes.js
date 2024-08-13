import Footer from 'components/Footer/index.js';
import Inicio from './pages/Inicio/index.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
