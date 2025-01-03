import React from 'react'
import { Link } from 'react-router'

function Footer() {
 const listnon = {
    listStyle:"none",
    fontSize:"14px"
 }
 const decoration = {
    textDecoration:"none",
    fontSize:"14px"
 }
 
  
 
  return (
        <footer className='fluid-container bg-black pt-4' >
          <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 row-cols-1 w-100 text-white mx-auto">
            <ul style={listnon} className='col ps-5'>
              <h4>Home</h4>
              <li><a href='#' className='text-decoration-none'>Hello world how are you</a></li>
              <li><a href='#' style={decoration}>Hello good or bad</a></li>
              <li><a href='#' style={decoration}>Hello tell me please</a></li>
              <li><a href='#' className='text-decoration-none'>Hello Lorem ipsum dolor, sit amet consectetur</a></li>
            </ul>
          <ul className='col list-unstyled ps-5'>
              <h4>About</h4>
              <li><a href='#' className='text-decoration-none' style={listnon}>Google</a></li>
              <li><a href='#' className='text-decoration-none' style={listnon}>Facebook</a></li>
              <li><a href='#' className='text-decoration-none' style={listnon}>Twitter</a></li>
              <li><a href='#' className='text-decoration-none' style={listnon}>Linkdin</a></li>
             </ul>
          <ul className='col list-unstyled ps-5'>
            <h4>Contact Here</h4>
            <li><a href='#' className='text-decoration-none' style={listnon}>Newboard</a></li>
            <li><a href='#' className='text-decoration-none' style={listnon}>Sports News</a></li>
            <li><a href='#' className='text-decoration-none' style={listnon}>Health News</a></li>
            <li><a href='#' className='text-decoration-none' style={listnon}>Tech News</a></li>
          </ul>
           <ul  className='col list-unstyled ps-5'>
            <h4>Greetings href all</h4>
            <li><a href='#' className='text-decoration-none' style={listnon}>World Wide News</a></li>
            <li><a href='#' className='text-decoration-none' style={listnon}>Search Any News</a></li>
            <li><a href='#' className='text-decoration-none' style={listnon}>By typing</a></li>
            <li><a href='#' className='text-decoration-none' style={listnon}>In the Search bar</a></li>
           </ul>
        </div>
        
           <hr />
           <div className='d-flex justify-content-between px-5 text-decoration-none'>
              <p>hello world this is a copy write section</p>
              <div>
                <a to='#' className='text-white text-decoration-none'>Homemaker </a>
                <a to='#' className='text-white text-decoration-none'>Demolisher</a>
              </div> 
           </div>
        </footer>
         
  )
}

export default Footer