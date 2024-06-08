import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [input ,SetInput]=useState({
    username:"",
    email:"",
    phonenumber:"",
    dob:""
  })
  const[modal,setModal]=useState(false)
  
  
  const handleopenform=()=>{
    setModal(true)
  }
  const handlechange=(e)=>{
    const {name,value}=e.target;

    SetInput((prev)=>( {...prev,[name]:value}));

  }
  
  const handleModal=(e)=>{
    e.preventDefault();
    if(input.phonenumber.length!==10){
      alert("Invalid phone number. Please enter a 10-digit phone number.invalid phone number")
    }
   SetInput({
    username:"",
    email:"",
    phonenumber:"",
    dob:""
  });
   setModal(false)
  }
  const handleCloseModal = (e) => {
    if (e.target.className === 'modal') {
      setModal(false);
    }
  }

  return (
   
      
<div  className="App" onClick={handleCloseModal}> 
  <h1> User Details Modal</h1>
  <button onClick={handleopenform}>Open Form</button>


{modal&& 
  <div className='modal'>
  <div className="modal-content">
<form onSubmit={handleModal} > 
  <h1>Fill Details</h1>
 
   
   <label >Username:</label> <br/><input  id='username' name="username" value={input.username} type="text" onChange={handlechange} required/><br/>
   <label>Email:</label> <br/><input id='email' name="email" value={input.email} type="email"  onChange={handlechange}required/><br/>
   <label>Phone Number:</label> <br/><input id="phone" name='phonenumber' value={input.phonenumber}
   pattern='/d{10}' type="tel" onChange={handlechange}></input><br/>
   <label>Date of Birth:</label> <br/><input id='dob' name="dob" value={ input.dob} type="date"onChange={handlechange} required/><br/>
   <button className="submit-button" type="submit">Submit</button>
</form>
</div>
</div>
}




</div>

   
  );
}

export default App;
