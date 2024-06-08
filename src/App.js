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
    if(input.phonenumber.length<10){
      alert("invalid phone number")
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
    <div className="App">
      
<div className="modal"  onClick={handleCloseModal}> 
  <h1> User Details Modal</h1>
  <button onClick={handleopenform}>Open Form</button>

<div className="modal-content">

{modal&& <form onSubmit={handleModal} > 
  <h1>Fill Details</h1>
 
   
   <label >Username:</label> <br/><input  id='username' name="username" value={input.username} type="text" onChange={handlechange} required/><br/>
   <label>Email:</label> <br/><input id='email' name="email" value={input.email} type="email"  onChange={handlechange}required/><br/>
   <label>Phone Number:</label> <br/><input id='phonenumber' name='phonenumber' value={input.phonenumber} type="tel" onChange={handlechange}></input><br/>
   <label>Date of Birth:</label> <br/><input id='dob' name="dob" value={ input.dob} type="date"onChange={handlechange} required/><br/>
   <button className="submit-button" type="submit">Submit</button>
</form>
}

</div>

</div>

    </div>
  );
}

export default App;
