import Item from "./Item"
import { useState } from "react";

const Fooditems=({item})=>{
    //let fooditems=[]

   let [activeItems,setActiveItems]=useState([]);

   let onBuyButton = (item)=>
    {
    let newItems=[...activeItems , item];
    setActiveItems(newItems);
   }

    return(
    <ul className="list-group">
      {item.map((item)=> 
       (
       <Item  
       key={item} 
       foodItem={item} 
       bought={activeItems.includes(item)}
       handleBuy={() => onBuyButton(item)}>
       </Item>
       )
       )}
    </ul>
    )
}
export default Fooditems