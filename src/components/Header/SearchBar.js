import Input from '../UI/Input/Input';
import {useState} from 'react';
import Button from '../UI/Input/Button';
import './style.scss';

const SearchBar = ({ services }) => {

  const [catchWord,setCatchWord ] = useState('');

  const handleOnSubmit = (e) => e.preventDefault();  

  const catchAMatch = ( e ) => {
    if(!e.target.value) return setCatchWord('')

    const result = services.filter(service => service.description.includes(e.target.value))
  }

  return (
    <div>
      <form className='search' onSubmit={handleOnSubmit}>
        <Input 
        type='text'
        placeholder='search..'
        onChange = {(value) => setCatchWord(value) }
        validation={{
          isRequired:false,
          minLenght:0,
          type:'string',
         }}/>
             
        
        < Button >Go</Button>
      </form>
      
    </div>
  );
};

export default SearchBar;
