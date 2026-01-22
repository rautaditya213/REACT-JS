import Todoitem from "./Todoitem"

const Todoitems=({onDeteleItem,todoitems})=>{
return(
 <div className='items'>
   {
    todoitems.map((item)=>(
        <Todoitem task={item.name} date={item.dueDate} onDeteleItem={onDeteleItem}></Todoitem>
    ))
   }
    </div> 
)
}
export default Todoitems