import Banner from 'components/Banner';
import Cabecalho from 'components/Cabecalho';
import Footer from 'components/Footer';
import Titulo from 'components/Titulo';

function Inicio() {
  return (
    <>
      <Cabecalho />
      <Banner imagem='home' />
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <Footer />
    </>
  );
}

export default Inicio;
