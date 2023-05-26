import { useState } from "react";

const ValidateField = () => {

  const [ error, setError ]= useState(null)

  const setErrorcontroled = (value ,{ type, minLenght,isRequired }) => {
    
    if (type && typeof value !== type){
      setError(`the value must be a ${type}`);
    } else if (isRequired && !value){
      setError(` this field is required`);
    }else if ( minLenght && value.lenght < minLenght){
      setError(`the value must have at lease ${minLenght} characteres`);
    } else {
      setError(null);
    }
  };

  return {
    error,
    setErrorcontroled
   }
}

export default ValidateField;
