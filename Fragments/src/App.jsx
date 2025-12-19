import Fooditems from "./Components/Fooditems"
import Errormes from "./Components/Errormes"
import Container from "./Components/Container"
import "./App.css"
import FInput from "./Components/FInput"

function App() {
  // let fooditems=[]
    let fooditems=["dal","green vegetable","milk","teja","sid","sonu"]


  return (
    <>
  <Container>
     <h1 className="food-heading">Healty Food</h1>
     <Errormes item={fooditems}></Errormes>
     <FInput></FInput>
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
