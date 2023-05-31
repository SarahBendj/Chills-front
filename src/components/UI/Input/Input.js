import { useId} from 'react'
import './input.scss';
import ValidationForm from '../../Hook/validationForm';

const Input= ({label ,name ,type, placeholder,validation, value, onChange}) => {

  const id = useId();

  const { error, setErrorcontroled } = ValidationForm();

  const handleOnChange = (e) => {
    const { value } = e.target;
    setErrorcontroled(value, validation)
    onChange(value)

  }

  return (
    <div className='input'>
    
      <label htmlFor={id}> { label }</label>
      <input type={type} name={name} className='input-text' placeholder={placeholder}  value={ value } onChange={ handleOnChange }/>
      {
        error && <p className='error'>{ error }</p>
      }
      
    </div>
  );
};

export default Input;
