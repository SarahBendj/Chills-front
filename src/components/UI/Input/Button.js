import './input.scss';

const Button = ( {type='button', onClick, children} ) => {
  return (
    <button  className='btn' type={type} onClick = {onClick}>
      { children} 
    </button>
  );
};

export default Button;
