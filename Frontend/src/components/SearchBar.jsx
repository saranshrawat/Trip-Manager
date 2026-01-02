import React, { useState } from 'react'
import axios from 'axios'

function SearchBar() {

     const[input, setInput]=useState("");



     const handleSearch=async()=>{
        try{
              const res= await axios.post()

        }
       catch{

       }

     }

  return (
    <div>
        <input type="text" name="search" value={input} placeholder='Enter place name' onChange={(e)=>setInput(e.target.value)}/> 


        <button > ADD </button>


    </div>
  )
}

export default SearchBar