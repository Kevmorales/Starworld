import React from 'react'
import Person from './Person'



export default function People({data, images}) {

  

  const testImages = images.map((images, i) => images.image);
  const testData = data.map((people, i) => people);


  const testArr = testData.map( function(x, i){
      return {...x, "image": testImages[i+1]}        
  }.bind(this));
                  
  console.log(testArr);

  



  return (
    <div>
      
   {/* {images.map((images, i) => images.image)} */}
      {testArr.map((people, i) => {
        
return (
    <Person key={i} {...people}/>
    
    
      )
      })}
    </div>
    
  
  
  )
}