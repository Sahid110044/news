import React from 'react'
import { NavLink } from 'react-router'

function Header({setcategory,category,handlformsubmit,input,setinput}) {


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
  <div className="container-fluid px-xl-5" >
    <a className="navbar-brand bg-white text-dark px-1 py-0 border border-4 fw-bolder rounded-1" href="#">Navbar</a>
    <form onSubmit={handlformsubmit} className="d-flex" role="search">
        <input 
         name='search'
         value={input}
         onChange={(event)=>setinput(event.target.value)} 
         className="form-control me-2 h-50" 
         type="search" 
         placeholder="Search" 
         aria-label="Search"
         style={{maxWidth:"87px"}}
         />
        <button className="btn btn-outline-success h-50" style={{fontSize:"13px"}} type="submit">Search</button>
      </form>
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* default boostrap icon navbar-toggler-icon */}
      <span className="navbar-toggler-icon fs-5" ></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       
        <li className="nav-item">
          <NavLink to='/' onClick={()=>setcategory("general")} className='nav-link'>Newsboard</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink to='/' className="nav-link" onClick={()=>setcategory("business")} >Business News</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/' onClick={()=>setcategory("health")} className="nav-link ">Health News</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/' onClick={()=>setcategory("sports")} className="nav-link ">Sports News</NavLink>
        </li>
        
      </ul>
    
     
    </div>
  </div>
   </nav>
       
    </>
  )
}

export default Header