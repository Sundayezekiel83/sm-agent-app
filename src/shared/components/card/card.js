import './card.scss'

const CustomCard = ({ children, ...props }) => {
  return (
    <div className={`card-wrapper ${props.active}`} {...props}>
      <div className='icons-holder'>
        {props.icon}
      </div>
      <div className='detail-wrapper'>
        <span className='title'>{props.title}</span>
        <p className='details'>{props.details}</p>
      </div>
    </div>
  );
}

export default CustomCard;