import {useContext, useState} from"react"
import { TodoItemsContext } from "../store/todo-item-store";

function TODO(){
  const {addNewItem}= useContext(TodoItemsContext);
  const [todoName,setTodoName] = useState("");
  const [todoDate,setTodoDate] = useState("");

  const handleNameChange =(event)=>{
    setTodoName(event.target.value);
  }

  const handleDateChange=(event)=>{
    setTodoDate(event.target.value);
  }

  const handleAddButtonClicked=(event)=>{
    event.preventDefault();
      addNewItem(todoName, todoDate );
      setTodoDate("");
      setTodoName("");
  }
return(
    <form className="container text-center" onSubmit={handleAddButtonClicked}>

  <div className="row kg-row items">
    <div className="col-6">
      <input type="text" placeholder ="Enter TODO here" value={todoName} onChange={handleNameChange}  /></div>
    <div className="col-4">
      <input type="date" value={todoDate} onChange={handleDateChange} /></div>
    <div className="col-2">
      <button className="btn btn-success kg-button"
    >ADD</button></div>
  </div>
  </form>

 )
} 
export default TODO