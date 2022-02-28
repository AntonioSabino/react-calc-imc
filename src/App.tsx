import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import { GridItem } from './components/GridItem/GridItem';

import { levels, calculateImc } from './helpers/imc';

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);

  const handleCalculateButton = () => {
    if (heightField && weightField) {

    } else {
      alert("Digite todos os campos.");
    }
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado peala Organização Mundial de Saúde para calcular o peso idela de cada pessoa.</p>

          <input
            type="number"
            placeholder="Digite a sua altura. Ex: 1.5 (metros)"
            value={heightField > 0 ? heightField : ''}
            onChange={({ target }) => setHeightField(parseFloat(target.value))}
          />
          <input
            type="number"
            placeholder="Digite o seu peso. Ex: 75.3 (kg)"
            value={weightField > 0 ? weightField : ''}
            onChange={({ target }) => setWeightField(parseFloat(target.value))}
          />

          <button onClick={handleCalculateButton}>
            Calcular
          </button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((level, key) => (
              <GridItem key={key} level={level} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;