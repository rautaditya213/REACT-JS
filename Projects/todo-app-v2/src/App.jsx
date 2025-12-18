import AppName from "./components/AppName";
import TODO from "./components/TODO";
import Todoitems from "./components/Todoitems";
import './App.css';


function App() {

  const todoItems=[
    {
    name: 'Buy Milk',
    dueDate: '18-dec-2025'
  },

  {
    name:'Do nothing',
    dueDate:'18-Dec-2025'
  },

  {
    name : 'dance',
    dueDate:'20-dec-2024'
  }
]
  return (
  <center class='todo-container'>

   <AppName></AppName>
   <TODO></TODO>
   <Todoitems todoitems={todoItems}></Todoitems>

  </center>
  )

}

export default App
