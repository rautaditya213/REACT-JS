import css from "./Item.module.css"

const Item=({foodItem,bought, handleBuy})=>{
    /*const handleBuy=(event) =>{
           console.log(event);
           console.log(`${foodItem} is bought`)
    }*/
    
    return(
        
    <li  key={foodItem} className={`${css.items} list-group-item ${ bought && 'active'}`}>
        <span className={css.span}>{foodItem}</span>
        <button 
         className={`${css.buy} btn btn-info`} 
         onClick={handleBuy}> Buy </button>
    </li> 
        
    )
}
export default Item;