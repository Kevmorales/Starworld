import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import People from './People'

function App() {
  const [peoples,setPeoples]= useState([]);
  const [loading,setLoading]= useState(true);
  const [images, setImages] = useState([]);

  const fetchPeople = async () => {

    setLoading(true);
    let currentPage = 0;
    let nextPage= true;
    let allPeople=[];
    
    
    try {
    while(nextPage !== null){
        ++currentPage
    
      
        const response = await fetch(`https://swapi.dev/api/people/?page=${currentPage}&format=json`);
        const data = await response.json();
        allPeople.push(...data.results)
        nextPage= data.next
        setLoading(false);
  }} catch (error) {
          setLoading(false);
      console.log(error);
   

  }
  setPeoples(allPeople)
}

const fetchImages = async () => {

  setLoading(true);
  let charImages=[""];

  try {
      const response = await fetch(`https://akabab.github.io/starwars-api/api/all.json`);
      const characters = await response.json();
      charImages.push(...characters)
  } catch (error) { 
    setLoading(false);
      // const charImages = characters.map((character) => character.image);
  }
      setImages(charImages)
  
}   


  useEffect(()=>{
    fetchPeople()
    fetchImages()
    
  },[])

  if (loading) {
      return (
      
       <Loading />
    
   )
   };


  return (
  
  <main>

<People data={peoples} images={images}/>

    </main>

); 


}

export default App














