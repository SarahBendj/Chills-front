import './input.scss';

const Button = ( {type='button',display='btn', onClick, children} ) => {
  return (
    <button  className={display} type={type} onClick = {onClick}>
      { children} 
    </button>
  );
};

export default Button;
