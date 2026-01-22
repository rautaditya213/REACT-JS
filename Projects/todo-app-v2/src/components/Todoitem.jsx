function Todoitem({task,date,onDeteleItem}){
 
return <div class="container ">
    
    <div class="row kg-row  ">
    <div class="col-6">{task}</div>
    <div class="col-4">{date}</div>
    <div class="col-2">
    <button type="button" class="btn btn-danger kg-button" onClick={()=>onDeteleItem(task)}>delete</button></div>
  </div>
  </div>
    
}
export default Todoitem;