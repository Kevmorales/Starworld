import React from 'react'




export default function Search({searchValue,setSearchValue}) {
  

  function handleChange(event) {
    setSearchValue(event.target.value);
  }




  return (

  
  <input type="text" placeholder="Search for a character.." value={searchValue} onChange={handleChange}/>

  )
}