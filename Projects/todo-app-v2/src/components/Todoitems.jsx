import Todoitem from "./Todoitem"

const Todoitems=({todoitems})=>{
return(
 <div className='items'>
   {
    todoitems.map((item)=>(
        <Todoitem task={item.name} date={item.dueDate}></Todoitem>
    ))
   }
    </div> 
)
}
export default Todoitems