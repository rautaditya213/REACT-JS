
import styles from './App.module.css'
import Display from './Components/Display'
import ButtonsContainer from './Components/ButtonsContainer'
import { useState } from 'react'

function App() {
   const [calVal, setCalVal]=useState("");

   const onButtonClick = (item)=>{ 
    console.log(item)
    if(item==='C'){
       setCalVal("");
    }
    else if(item ==='='){
        const result=eval(calVal);
        setCalVal(result);
    }
    else{
   const newval=calVal+item;
   setCalVal(newval);
    }
   }
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer 
      onButtonClick={onButtonClick}
      ></ButtonsContainer>           
    </div>
  )
}

export default App
