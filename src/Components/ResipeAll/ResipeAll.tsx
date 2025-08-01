import { useState } from "react";
import { resipeObject } from "../../data";
import styles from "./ResipeAll.module.css";
import SearchResipe from "./SearchResipe/SearchResipe";




const ResipeAll: React.FC = () => {
 
const [resipeList, setResipeList] = useState(resipeObject)
const [inputValue, setInputValue] = useState('')



  return (
    <>
   <SearchResipe inputValue = {inputValue} setInputValue = {setInputValue}/>
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
    </>
  )
};

export default ResipeAll;
