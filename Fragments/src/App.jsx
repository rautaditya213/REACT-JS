import Fooditems from "./Components/Fooditems"
import Errormes from "./Components/Errormes"

function App() {
  // let fooditems=[]
    let fooditems=["dal","green vegetable","milk","teja","sid","sonu"]


  return (
  <>
     <h1>Healty Food</h1>
     <Errormes item={fooditems}></Errormes>
     <Fooditems item={fooditems}></Fooditems>
  </>

  )
}

export default App
