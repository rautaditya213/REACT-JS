import AppName from "./components/AppName";
import TODO from "./components/TODO";
import Todoitems from "./components/Todoitems";
import './App.css';
import { useState } from "react";
import Welcome from "./components/Welcome";
import { TodoItemsContext } from "./store/todo-item-store";


function App() {


 const [todoItems,setTodoItems] =useState([]);

 const addNewItem=(itemName,itemDueDate)=>{
   const newTodoItem=[...todoItems, {name:itemName, dueDate:itemDueDate} ];
   setTodoItems(newTodoItem);
 }

 const deleteItem=(itemName)=>{
     console.log(`item deleted: ${itemName}`);
     const afterDeleteItem =todoItems.filter(item=>item.name !== itemName);
     setTodoItems(afterDeleteItem)
 }

  return ( 
  <TodoItemsContext.Provider value={{
    todoItems,
    addNewItem,
    deleteItem,
    }}>
  <center className='todo-container'>

   <AppName></AppName>
   <TODO></TODO>
   <Welcome ></Welcome>
   <Todoitems></Todoitems>

  </center>
</TodoItemsContext.Provider>
  )

}

export default App
