import img from '../assets/photos/wall2.jpg'



const  Newsitem = ({item,index})=> {
  const {title,description,source,urlToImage,url} = item
 
 //  console.log(`CHILD COMPONENT RENDERS ${index}`)
  return(
   <>
    <div className="card bg-dark text-white pt-3" style={{width:"18rem"}}>
     <img src={urlToImage?urlToImage:img} className="card-img-top"  style={{maxHeight:"200px"}} alt="..."/>
     <div className="card-body">
    <h5 className="">Name : {source.name?source.name.slice(0,15):"No Name"}</h5>
       <h6 className="card-title">Title : {title.slice(0,10)}</h6>
       <p className="card-text" style={{fontSize:"13px"}}><span>Description</span> : {description?description.slice(0,90):"hey bro no description is available"}</p>
       <a href={url} className="btn btn-primary">Read More</a>
 </div>
</div>
   </>
  )
}

export default Newsitem