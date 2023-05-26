import { useId } from 'react';
import ValidationForm from '../../Hook/validationForm';
import './input.scss';

const InputTextArea = ({label ,name , placeholder, validation, value, onChange}) => {

  const id = useId();

  const { error, setErrorcontroled } = ValidationForm();

  const handleOnChange = (e) => {
    const { value } = e.target;
    setErrorcontroled(value , validation)
    onChange(value)

  }

  return (
    <div className='input'>Description
    
      <label htmlFor={id}> { label }</label>
      <textarea type="text" name={name} className='input-textArea' placeholder={placeholder}  value={ value } onChange={ handleOnChange }/>
      {
         error && <p  className='error'>{ error }</p>
      }
    </div>
  );
};

export default InputTextArea;
