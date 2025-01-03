import React from 'react'
import { NavLink, useNavigate } from 'react-router'

function About() {
  const navigate = useNavigate();
  return (
    <div>
      this is a ABOUT section
      <br />
      <NavLink to='/login'>go to login</NavLink>
      <br />
      <button onClick={()=> navigate(-1)}>go back</button>
    </div>
  )
}

export default About