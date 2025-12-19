import styles from "./FInput.module.css"
const FInput=()=>{
    return(
  <input type="text" placeholder="Search Here"
   className={styles.inputb} 
   onChange={(event)=>console.log(event.target.value)}
   />
    )
}
export default FInput