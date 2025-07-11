import styles from "./CategoriesResipe.module.css";

const CategoriesObject = [
  { name: "Вегетерианское", img: "image 2.png" },
  {
    name: "Мясо",
    img: "image 3.png",
  },
  {
    name: "Курица",
    img: "image 4.png",
  },
  {
    name: "Десерты",
    img: "image 5.png",
  },
  {
    name: "Паста",
    img: "image 6.png",
  }
];

const CategoriesResipe: React.FC = () => {
  return (
    <>
    <p className={styles.heading}>Категории</p>
   
    <div className={styles.container}>
         
      {CategoriesObject.map((item) => {
        return (
            <button className={styles.buttonCategories}>
          <div className={styles.containerElement}>
           <img className={styles.imageResipe} src={item.img} alt="" />
            <p className={styles.nameResipe}>{item.name}</p>
          </div>
          </button>
        );
      })}
     
    </div>
    
    </>
  );
};
export default CategoriesResipe;
