//import styles from './CSS/Phase.module.css'
import styles from '../CSS/Phase.module.css'


function Phase(){
    return (
        <div className={styles.phaseContainer}>
        <p className={styles.phaseContent}>This is a Component with a Phase!</p>
        </div>
    )
}

export default Phase