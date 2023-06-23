import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"


const Create = () => {
    
const [name , setName] = useState('')
const [email , setEmail] = useState('')
const header = {"Access-Control-Alow-Origin" : "*"}
const Navigate = useNavigate()




 const handleNameInput = (e) => {
        setName(e.target.value)
   }


  const handleEmailInput = (e) => {
    setEmail(e.target.value)

  }


  const handleSubmit = (e) => {
     e.preventDefault()
     postData();
     
     
  }


  const postData = () => {
    axios.post(`https://648ccc548620b8bae7ed636f.mockapi.io/CRUD`, {
        name : name , 
        email : email , 
        header 
    }).then(() => {
        Navigate("/read")
    })
}


  
    

  return (
    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" onChange={handleNameInput} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">E-mail</label>
    <input type="text" className="form-control" onChange={handleEmailInput}  id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
</form>
  );
    
  
}

export default Create
