import styles from "./FInput.module.css"
const FInput=({handleKeyDown})=>{
    return(
  <input type="text" placeholder="Search Here"
   className={styles.inputb} 
   onKeyDown={handleKeyDown}
   />
    )
}
export default FInput