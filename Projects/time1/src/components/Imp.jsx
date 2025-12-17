let Imp=()=>{
    let time=new Date()
    return(
        <p>This is the current time and date: {time.toLocaleDateString()}    -   {" "}{time.toLocaleTimeString()}</p>
    )
}
export default Imp;