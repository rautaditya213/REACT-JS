import {useState} from"react"
function TODO({onNewItem}){
  const [todoName,setTodoName] = useState();
  const[todoDate,setTodoDate]= useState();

  const handleNameChange =(event)=>{
    setTodoName(event.target.value);
  }

  const handleDateChange=(event)=>{
    setTodoDate(event.target.value);
  }

  const handleAddButtonClicked=()=>{
      onNewItem(todoName, todoDate );
      setTodoDate("");
      setTodoName("");
  }
return(
    <div class="container text-center">

  <div class="row kg-row items">
    <div class="col-6">
      <input type="text" placeholder ="Enter TODO here" value={todoName} onChange={handleNameChange}  /></div>
    <div class="col-4">
      <input type="date" value={todoDate} onChange={handleDateChange} /></div>
    <div class="col-2">
      <button type="button" class="btn btn-success kg-button"
    onClick={handleAddButtonClicked}>ADD</button></div>
  </div>
  </div>

 )
} 
export default TODO