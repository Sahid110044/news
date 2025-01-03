import React from 'react'
import { NavLink, useNavigate } from 'react-router'

function Home() {
  const navigate = useNavigate();
  
  return (
    <div>



      hello this is a HOME PAGE
      <br />
      <NavLink to='/about'>go to about</NavLink>
      <br />
      <button onClick={()=>navigate(-1)}>back</button>
    </div>
  )
}

export default Home