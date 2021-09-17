import React, { useState } from 'react';




const Person = ({name,height}) => {
  
  
  return (
  
  <article className="single-tour">
    
    
    <footer> 
      <div className="tour-info">
      <h4>{name}</h4>
      <h4></h4>
      <h4 className="tour-price"> Height:{height}</h4>
      
      </div> 

      
      </footer>

  </article>

);
};

export default Person;