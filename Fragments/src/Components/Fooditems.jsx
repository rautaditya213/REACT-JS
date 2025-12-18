import Item from "./Item"

const Fooditems=({item})=>{
    //let fooditems=[]

    return(
    <ul className="list-group">
      {item.map((item)=> 
       (<Item  key={item} foodItem={item}></Item>)
       )}
    </ul>
    )
}
export default Fooditems