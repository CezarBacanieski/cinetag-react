import Banner from 'components/Banner';
import styles from './Favoritos.module.css';
import Titulo from 'components/Titulo';
import Card from 'components/Card';
import json from '../../json/db.json';

function Favoritos() {
  return (
    <>
      <Banner imagem='favoritos' />
      <Titulo>
        <h1>Aqui são as porras dos favoritos</h1>
      </Titulo>

      <section className={styles.container}>
        {json.map((card) => {
          return <Card {...card} id={card.id} />;
        })}
      </section>
    </>
  );
}

export default Favoritos;
