import css from "./Item.module.css"
const Item=({foodItem})=>{

    const handleBuy=(event) =>{
           console.log(event);
           console.log(`${foodItem} is bought`)
    }
    
    return(
        
     <li  key={foodItem} className={`${css.items} list-group-item`}>
        <span className={css.span}>{foodItem}</span>
        <button 
        className={`${css.buy} btn btn-info`} 
        onClick={ (event)=> handleBuy(event)}>buy</button>
        </li> 
        
    )
}
export default Item;