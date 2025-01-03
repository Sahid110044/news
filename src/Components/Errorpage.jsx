import React from 'react'
import { useNavigate } from 'react-router'

function Errorpage() {
  const navigate = useNavigate();
  return (
    <>
        <h1>AN ERROR HAS OCCURED </h1>
         <button onClick={()=>navigate(-1)}>Go previous</button>
    </>
  )
}

export default Errorpage