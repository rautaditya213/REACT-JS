import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

const welcome=()=>{
    const {todoItems}=useContext (TodoItemsContext);
    return todoItems.length===0 && <p> Enjoy Your Day</p>
}
export default welcome ;