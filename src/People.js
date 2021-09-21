import React, { useState} from 'react'
import Person from './Person'
import Search from './Search'


export default function People({data, images}) {

  const [searchValue, setSearchValue] = useState("");
  

  const testImages = images.map((images, i) => images.image);
  const testData = data.map((people, i) => people);
  

  const testArr = testData.map( function(x, i){
      return {...x, "image": testImages[i+1]}        
  });
                  

const filteredNames = testArr.filter(entry => entry.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div>
    
  <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
    
    
      {filteredNames.map((people, i) => {
        
return (
  
  
    
 <Person key={i} {...people} searchValue={searchValue}/>

    
    
    
    
      )
      })}

    

    </div>
    
  
  
  )
}