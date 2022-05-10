import './customInput.scss'


const CustomInput = ({ ...props }) => {
  const Text = props.inputtype
  return (
    <div className='input-wrapper'>
      <span className='placeholder-text'>{props.labelText}</span>
      <Text className="c-input" {...props} />
    </div>
  );
}

export default CustomInput;