import Fooditems from "./Components/Fooditems"
import Errormes from "./Components/Errormes"
import Container from "./Components/Container"
import "./App.css"
import FInput from "./Components/FInput"
import { useState } from "react"

function App() {
  // let fooditems=[]
  //let fooditems=["dal","green vegetable","milk","teja","sid","sonu"]
    
    
   /* let textStateArr= useState("food item entered by user");
    let textToShow= textStateArr[0]
    let setTextState= textStateArr[1]*/

   // let newfooditem="food item added by user"

    let [fooditems , setfooditem]= useState(["dal","green vegetable","milk"]) // destructired version of above three lines
    let [newfooditem, setNewtext] = useState("");

    const onKeyDown=(event)=>{
      if(event.key==='Enter'){
      newfooditem= event.target.value;
      setNewtext(newfooditem);
      fooditems=[...fooditems,newfooditem]
      console.log(event.target.value);
      setfooditem((prev) => [...prev, newfooditem]);

      event.target.value=""
    }
    }

  return (
    <>
  <Container>
     <h1 className="food-heading">Healty Food</h1>
     <Errormes item={fooditems}></Errormes>
     <FInput handleKeyDown={onKeyDown}></FInput>
     <p>food item added by user is  {newfooditem}</p>
     <Fooditems item={fooditems}></Fooditems>
  </Container>
  {/*<Container>
    <p>You should Eat this bro </p>
  </Container>*/
  }
  </>
  
  )
}

export default App
