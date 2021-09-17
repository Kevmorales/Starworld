import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import People from './People'

function App() {
  const [peoples,setPeoples]= useState([]);
  const [loading,setLoading]= useState(true);

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


  useEffect(()=>{
    fetchPeople()
  },[])

  if (loading) {
      return (
      
       <Loading />
    
   )
   };


  return (
  
  <main>

<People data={peoples} />

  
    </main>

); 
}

export default App























// import React, { useState, useEffect } from 'react'
// import Loading from './Loading'
// import People from './People'







// function App() {
// const [loading,setLoading]= useState(true);
// const [people,setPeople]= useState([]);

// const fetchPeople = async () => {
  
//   setLoading(true);
    
//     try {
//       const response = await fetch('https://swapi.dev/api/people/?page=1&format=json');
//       const data = await response.json();
//       setLoading(false);
//       setPeople(data.results);
//       console.log(data);

//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }

// }
// useEffect(()=>{
// fetchPeople();

// },[]);

 
// if (loading) {
//   return (
  
//     <Loading />

//   )
// };




//   return (
  
//   <main>
    
//   <People data={people} />
  
//     </main>

//   ); 
// }

// export default App
