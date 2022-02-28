import { Level } from "../../helpers/imc";
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
    level: Level
};

export const GridItem = ({ level }: Props) => {
    return (
        <div>
            <div className={styles.main} style={{ background: level.color }}>
                <div className={styles.gridIcon}>
                    {<img src={level.icon === 'up' ? upImage : downImage} alt="" width="30" />}
                </div>
                <div className={styles.gridTitle}>{level.title}</div>
                <div className={styles.gridInfo}>
                    <>
                        IMC está entre <strong>{level.imc[0]}</strong> e <strong>{level.imc[1]}</strong>
                    </>
                </div>
            </div>
        </div>
    );
}