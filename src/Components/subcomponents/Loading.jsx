import React from 'react'

function Loading() {
  return (
    <>
        <div className="fluid-container d-flex align-items-center justify-content-center" style={{height:"52vh",background:"black"}}>
        <div className="spinner-border text-white" role="status">
          <span className="visually-hidden">Loading...</span>
       </div>
        </div> 
    </>
  )
}

export default Loading