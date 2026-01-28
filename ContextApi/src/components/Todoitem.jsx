import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

function Todoitem({task,date}){
 const {deleteItem}=useContext(TodoItemsContext);
 const {todoItems} = useContext(TodoItemsContext);
return <div class="container ">
    
    <div class="row kg-row  ">
    <div class="col-6">{task}</div>
    <div class="col-4">{date}</div>
    <div class="col-2">
    <button type="button" className="btn btn-danger kg-button" 
    onClick={()=>deleteItem(task)}>delete</button></div>
  </div>
  </div>
    
}
export default Todoitem;