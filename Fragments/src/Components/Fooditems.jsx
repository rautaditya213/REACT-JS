import Item from "./item"

const Fooditems=({item})=>{
    //let fooditems=[]

    return(
    <ul className="list-group">
      {item.map((item)=> 
       (<Item foodItem={item}></Item>)
       )}
    </ul>
    )
}
export default Fooditems