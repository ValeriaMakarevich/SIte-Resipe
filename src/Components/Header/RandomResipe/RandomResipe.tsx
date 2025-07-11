import styles from './RandomResipe.module.css' 

const RandomResipe:React.FC = () =>{
    return (
  <>
        <img className={styles.backgroundResipe} src="fanera-doska.jpg" alt="" />
        <div className={styles.randomResipe}>
        <p className={styles.title}>Не знаете что приготовить сегодня?</p>
        <p className={styles.text}>Нажмите на кнопку</p>
        <button className={styles.buttonResipe}>Случайный рецепт</button>
        </div>
     </>
    )
}

export default RandomResipe