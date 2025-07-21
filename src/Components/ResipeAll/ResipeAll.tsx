import { resipeObject } from "../../data";
import styles from "./ResipeAll.module.css";



const ResipeAll: React.FC = () => {
  
  return (
    <div className={styles.ResipeContainer}>
        {resipeObject.map((item, id) =>{
            return(
        <div className={styles.CardContainer} key={id}>
         <img className={styles.imageResipe} src={item.img} alt="" />
         <p className={styles.resipeName}>{item.name}</p>

         <button className={styles.tagButton}>
         <p>{item.tag}</p>
         </button>
        </div>
            )
        })
        
        }
    </div>
  )
};

export default ResipeAll;
