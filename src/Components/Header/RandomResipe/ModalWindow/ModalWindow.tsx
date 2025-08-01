import type { ResipeObject } from "../../../../data";
import styles from "./ModalWindow.module.css";


interface ModalWindowtProps {
    active: boolean;
    setActive: (open: boolean) => void;
    resipe: ResipeObject 
  }

const ModalWindow:React.FC<ModalWindowtProps> = ({active, setActive, resipe}) =>{

    return(
        <div className={active ? styles.windowContainer : styles.inActive} onClick={() => setActive(false)}>
<div className={styles.windowResipe} onClick={e => e.stopPropagation()} >
    <button className={styles.buttonClose} onClick={() => setActive(false)}><img className={styles.imgClose} src="multiplication_17435831.png" alt="" /></button>
            <img className={styles.resipeImg} src={resipe.img} alt="" />
            <p className={styles.resipeName}>{resipe.name}</p>
            <button className={styles.resipeTag}>{resipe.tag}</button>
           
         <div className={styles.btnContainer}>
    <button className={styles.wiewResipe}>Посмотреть рецепт</button>
    <button className={styles.change}>Другой рецепт</button>
    <button className={styles.close} onClick={() => setActive(false)}>Закрыть</button>
    </div>
</div>
        </div>
    )
}

export default ModalWindow