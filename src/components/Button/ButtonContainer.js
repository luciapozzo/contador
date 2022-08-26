import './ButtonContainer.css'

const ButtonContainer = ({increase, decrease, reset}) => {

  return (
      <div className='button-container'>
        <button 
          className='reset-btn'
          onClick={reset}>Reset</button>
        <button 
          className='increase-btn'
          onClick={increase}>+</button>
        <button 
          className='decrease-btn'
          onClick={decrease}>-</button>
      </div>     
  )
}

export default ButtonContainer