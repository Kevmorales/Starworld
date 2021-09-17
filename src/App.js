import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import People from './People'

const api = 'https://swapi.dev/api/people/?format=json';


function App() {
const [loading,setLoading]= useState(true);
const [people,setPeople]= useState([]);


const fetchPeople = async () => {

  setLoading(true);

  try {
    const response = await fetch(api);
    const data = await response.json();
    setLoading(false);
    setPeople(data.results);
    
  } catch (error) {
    setLoading(false);
    console.log(error);
  }
  
  

};
useEffect(()=>{
fetchPeople();

},[]);

 
if (loading) {
  return (
  
    <Loading />

  )
};




  return (
  
  <main>
    
  <People data={people}/>
    
    </main>

  ); 
}

export default App
