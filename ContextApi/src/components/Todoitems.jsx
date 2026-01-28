import Todoitem from "./Todoitem"
import { TodoItemsContext } from "../store/todo-item-store"
import { useContext } from "react"

const Todoitems=()=>{
    
  const {todoItems } =  useContext (TodoItemsContext);
return(
 <div className='items'>
   {
    todoItems.map((item)=>(
        <Todoitem 
        key={item.name}
        task={item.name} 
        date={item.dueDate}
        ></Todoitem>
    ))
   }
    </div> 
)
}
export default Todoitems