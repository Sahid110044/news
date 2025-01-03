import React, { useState } from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'
import { useOutletContext } from 'react-router'  //without useOutletContext i can't access the category in outlet

function Layout() {
    const info = "shahid ansari is here baby don't you worry" 
    
    const [category,setcategory] = useState("general")
    const [input,setinput] = useState('')
     
    const handlformsubmit = (event)=> {
       event.preventDefault()
       if(input.trim()===""){                //trim() removes the white space of string
        alert("Enter Text")
       }
       setcategory(input)
       console.log(category)
    }
    //context keyword used to send the data into usecontextoutlet
    //both category and setcategory neet to pass only then category will be rendered
  return (
    <>
      <Header 
       setcategory={setcategory}
       category={category} 
       handlformsubmit={handlformsubmit}
       input={input}
       setinput={setinput}
       />
      <Outlet context={{info,category,setcategory}}/>             
      <Footer/>
    </>
  )
}

export default Layout