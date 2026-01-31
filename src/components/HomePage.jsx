import { useEffect, useState } from "react"

export default function HomePage(){

    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch("trending-movies.json").then((res)=>res.json()).then((jsonData)=>setData(jsonData)).catch((err)=>console.error("Failed to load json",err))
    })
    
    return(
        <>
       <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {
            data.map((item)=>(
                <div className="group relative">
                
                <img src={item.cover} className="aspect-square w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-auto lg:h-80"></img>
               
               <div className="mt-4 flex justify-between">
                <div>
               <h3>{item.name}</h3>
              </div>
              </div>
              
              </div>
            ))
        }
       </div>
        </>
    )
}