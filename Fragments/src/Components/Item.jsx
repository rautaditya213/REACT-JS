import css from "./Item.module.css"
const Item=({foodItem})=>{
    
    return(
        
     <li key={foodItem} className={`list-group-item ${css.item}`}>
        <span className={css.span}>{foodItem}</span>
        </li> 
        
    )
}
export default Item;