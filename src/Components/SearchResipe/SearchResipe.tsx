import styles from './SearchResipe.module.css' 

const SearchResipe:React.FC = () =>{
return(
    <div className={styles.searchContainer}>
    <input className={styles.search} type="text" placeholder="Поиск" />
    </div>
)
}
export default SearchResipe