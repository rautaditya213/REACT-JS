
function App() {
 let fooditems=["dal","Vegetable","Roti","BHAT","KUCH BHI NAHI","ghee"]
  return (
   <>
   <h1>Healty Food</h1>
   <ul className="list-group">
  <li className="list-group-item">Dal</li>
  {fooditems.map((item)=> (<li key={item} className="list-group-item">{item}</li>) )}
</ul>
</>

  )
}

export default App
