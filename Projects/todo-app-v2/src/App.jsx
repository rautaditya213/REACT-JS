import AppName from "./components/AppName";
import TODO from "./components/TODO";
import Todoitems from "./components/Todoitems";
import './App.css';
import { useState } from "react";
import Welcome from "./components/Welcome";


function App() {


 const [todoItems,setTodoItems] =useState([]);

 const handleOnNewItem=(itemName,itemDueDate)=>{
   console.log(`New Item added:${itemName} Date:${itemDueDate}`)
   const newTodoItem=[...todoItems, {name:itemName, dueDate:itemDueDate} ];
   setTodoItems(newTodoItem);
 }

 const handleDeletItem=(itemName)=>{
     console.log(`item deleted: ${itemName}`);
     const afterDeleteItem =todoItems.filter(item=>item.name !== itemName);
     setTodoItems(afterDeleteItem);
 }

  return (
  <center class='todo-container'>

   <AppName></AppName>
   <TODO onNewItem={handleOnNewItem}></TODO>
   {todoItems.length===0 && <Welcome></Welcome>}
   <Todoitems onDeteleItem={handleDeletItem} todoitems={todoItems}></Todoitems>

  </center>
  )

}

export default App
