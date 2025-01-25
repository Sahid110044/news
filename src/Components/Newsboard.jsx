import React, { useEffect, useState } from "react"
import {  useNavigate, useOutletContext } from "react-router"
import Loading from "./subcomponents/Loading";
import Newsitem from "./Newsitem";



function Newsboard() {
    
    const {category} = useOutletContext();   // useoutletcontext used to access the prop from outlet
//---------------------------------------------------------------------------
    // DEBOUNCING I AM APPLYING OVER HERE
    const [debouncing,setdebouncing] = useState(category)
    useEffect(()=>{
      const handler = setTimeout(()=>{
        setdebouncing(category)
        console.log("Debounce category:",category)
      },1000);
      return ()=> clearTimeout(handler);
    },[category])
//---------------------------------------------------------------------------


    const navigate = useNavigate();
    const [apidata,setapidata] = useState({})
    const [loading,setloading] = useState(true)
    
    
    
    // const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_api_key}`
      const url = `https://gnews.io/api/v4/search?q=${category}&lang=en&country=us&max=10&apikey=${import.meta.env.VITE_api_key}`
    

      useEffect(()=>{

      const fetchapi = async()=> {
        setloading(true)
         if(apidata[category]){
          console.log("i am using cached data")
          setloading(false)
         }

          try{
            const response = await fetch(url)
                                                       if(!response.ok) throw new Error(`shahid api is corrupted ${response.status}`)
            const data = await response.json();

            setapidata((prev)=>({...prev,[category]:data}))

            setloading(false)

          }catch(error){
           console.log(error)
           setloading(false)
          }
        }
        fetchapi();

      },[url,debouncing,category])



      if(loading){
        return <Loading/>
      }

    

     if(apidata[category]){

           return (
             <>
               <div className="fluid-container text-white" style={{background:"black"}}>
                         <h1 className="text-center">Latest <span className="badge bg-danger py-2">New</span></h1>
                       <div className="row row-cols-4 d-flex align-item-center justify-content-center gap-4 mx-auto ">
                        {apidata[category].articles.map((item,index)=>(
                         <Newsitem key={index} item={item} index={index}/>
                        ))}
                       </div>

               </div>
             </>
           )
     }
     }
      
  

export default Newsboard


