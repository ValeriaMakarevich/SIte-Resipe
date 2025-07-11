import styles from "./ModalWindow.module.css";

const ModalWindow = () =>{
    return(
        <div className={styles.windowContainer}>
<div className={styles.windowResipe}>
    <button className={styles.buttonClose}><img className={styles.imgClose} src="multiplication_17435831.png" alt="" /></button>
    <img className={styles.resipeImg} src="anton-rN7GMHp_og4-unsplash.jpg" alt="" />
    <p className={styles.resipeName}>Название блюда</p>
    <button className={styles.resipeTag}>ТЭГ</button>
    <div className={styles.btnContainer}>
    <button className={styles.wiewResipe}>Посмотреть рецепт</button>
    <button className={styles.change}>Другой рецепт</button>
    <button className={styles.close}>Закрыть</button>
    </div>
</div>
        </div>
    )
}

export default ModalWindow