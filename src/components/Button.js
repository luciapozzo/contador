import './Button.css'

const Button = ({operation, increaseBtn}) => {
  return (
    <button 
    className={increaseBtn ? 'increase-btn':'restart-btn'}>{operation}</button>
  )
}

export default Button