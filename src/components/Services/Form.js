import React, { useState } from 'react';
import InputText from '../UI/Input/InputText';
import InputTextArea from '../UI/Input/InputTextArea';
import './detail.scss'



const Form = ({extra , discount,technic}) => {
  

  const [ formValue, setFormValue] = useState({
    title: '',
    discount: '',
    description: ''
  });
  
  const handleOnSubmit = ( e ) => {
    e.preventDefault();
    console.log(formValue)

  }
  return (
    <div>
     <form className='form' onSubmit={handleOnSubmit}>
      < InputText  className='visuel-effect' name='text'
     
       placeholder='truc' 
       onChange={ (value)=> setFormValue({...formValue, title: value})} 
       value={formValue.title}  
       validation={ {
              isRequired:true,
              type: 'string',
              minLenght:3,
        }}/>
        < InputText  className='visuel-effect' name='text'
       placeholder='truc' 
       onChange={ (value)=> setFormValue({...formValue, discount: value})} 
       value={formValue.discount}  
       validation={ {
              isRequired:false,
              type: 'string',
              minLenght:3,
        }}/>
        <label htmlFor="sel">select </label>
        <select  className='form-selection visuel-effect' name="sel" id=""> 
        { 
        extra.map((item)=> <option key={item.id} > { item.name } </option>)
        }
        
        
        </select>
        <label htmlFor="sel">select </label>
        <select className='form-selection visuel-effect' name="sel" id=""> 
        {
          technic.map((item)=> <option key={item.id} > { item.name } </option>)
        }
      
        </select>
        <select className='form-selection visuel-effect' name="" id="">  select 
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        </select>
        <InputTextArea  className='visuel-effect'
         name='description'
         placeholder='lay down the description of your new task'
         value={formValue.description}
         onChange={ (value)=> setFormValue({...formValue, description: value})}
         validation={ {
               isRequired:true,
               type: 'string',
               minLenght:5,
         }}
          />
        
     <button  className='visuel-effect' type='submit' value='confirmer '> confirmer </button>
      </form>
      
    </div>
  );
};

export default Form;
