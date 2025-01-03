import React, { useState } from 'react'
import { Link, NavLink, useOutletContext } from 'react-router';

function Login() {
  const [bcolor,setbcolor] = useState("dark");
  const [user,setuser] = useState({
      fname:"",
      email:"",
      password:""
  })  
  
  const handlinputchange = (event)=> {
      const {name,value} = event.target;
      setuser((prev)=>({...prev,[name]:value}))  //[] brackets is used to treat it as key values not key name
  }
  const handlonsubmit = (event)=>{
     event.preventDefault();
     console.log(user)
  }

  const {info} = useOutletContext();

  return (
     <>
     <div className="container" style={{background: bcolor === "dark" ?"#dddddd":"#ffffff"}}>
      
    <div className="row">
      <div className="col-md-6">
        <h3 className="text-center">{bcolor === "dark" ?"login":"signup"}</h3>


        <form onSubmit={handlonsubmit}>
          <div className="mb-3">
            <label htmlFor="signupName" className="form-label">Name</label>
            <input 
            type="text" 
            name='fname'
            value={user.fname}
            onChange={handlinputchange}
            className="form-control"
            />
          </div>
         
          <div className="mb-3" >  
          {/*style={{display:bcolor==="dark"?"none":"block"}} THIS METHOD WILL CAUSE ERRORS BACAUSE OF REQUIRED KEYWORD */} 
          {bcolor !== "dark" && (
            <>
            <label htmlFor="signupEmail" className="form-label">Email</label>
            <input 
            type="email" 
            name='email'
            value={user.email}
            onChange={handlinputchange}
            required
            className="form-control"/>
            </>
          )}
          </div>

          <div className="mb-3">
            <label htmlFor="signupPassword" className="form-label">Password</label>
            <input 
            type="password" 
            name='password'
            value={user.password}
            onChange={handlinputchange}
            className="form-control"
            />
          </div>
          <button type='submit' onClick={() => setbcolor("dark")} className="btn w-100">Log in</button>
          <button type='submit' onClick={() => setbcolor("light")} className="btn w-100">Sign Up</button>
        </form>


      </div>
    </div>
  </div>
     <h1>{info}</h1>
     <NavLink to='../'>go to home</NavLink> 
     <br /> 
     <NavLink to='/about'>go the about</NavLink>
     </>

  )
}

export default Login