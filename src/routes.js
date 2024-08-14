import Inicio from './pages/Inicio/index.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Favoritos from 'pages/Favoritos/index.js';
import Cabecalho from 'components/Cabecalho/index.js';
import Footer from 'components/Footer/index.js';
import Container from 'components/Container/index.js';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/favoritos' element={<Favoritos />}></Route>
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
