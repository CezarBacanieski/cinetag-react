import Banner from 'components/Banner';
import Cabecalho from 'components/Cabecalho';
import Card from 'components/Card';
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
      <Card
        id='1'
        titulo='Gato'
        capa='https://thecatapi.com/api/images/get?format-src&type=png'
      />
      <Footer />
    </>
  );
}

export default Inicio;
