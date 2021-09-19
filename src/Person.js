import React from 'react';




const Person = ({name,height,gender,image,eye_color}) => {
  
  
  return (
  
  <article className="single-tour">
    
    <img src={image} alt={name} />
    <footer> 
      <div className="tour-info">
      <h4>{name}</h4>
      <h4 className="tour-price"> Height:{height}</h4>
      <h4 className="tour-price"> Gender:{gender}</h4>
      <h4 className="tour-price"> Eye Color:{eye_color}</h4>
      
      
      </div> 

      
      </footer>

  </article>

);
};

export default Person;