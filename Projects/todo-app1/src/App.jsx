import AppName from "./components/AppName";
import TODO from "./components/TODO";
import Todoitem1 from "./components/Todoitem1";
import Todoitem2 from "./components/Todoitem2";
import './App.css';


function App() {
  return (
  <center class='todo-container'>

   <AppName></AppName>
   <TODO></TODO>
   <div className='items'>
   <Todoitem1></Todoitem1>
   <Todoitem2></Todoitem2>
   </div>
  

  </center>
  )

}

export default App
