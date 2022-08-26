import './ButtonContainer.css'



const ButtonContainer = ({increase, decrease}) => {


  return (
      <div className='button-container'>
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