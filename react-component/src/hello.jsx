function Hello(){

    let myName ='aditya';
    let num=234;
    let fullName =() => {
        return 'aditya raut'
    }
    return <h3>
        hello this is the future speaking . i am {myName}  
          <br />this is the testing of method fullname {fullName()}
          <br />
          <br /> this is the message number {num} 
    </h3>
}

export default Hello;