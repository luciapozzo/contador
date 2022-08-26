import './App.css';
import ButtonContainer from './components/Button/ButtonContainer';
import Display from './components/Display/Display';
import {useState} from 'react'

function App() {

  const [counter, setCounter] = useState(0);
  const increase = () => setCounter (counter + 1);
  const decrease = () => setCounter (counter - 1);

  return (
    <div className="counter-container">
      <Display 
        counter={counter}/>
      <ButtonContainer 
        increase={increase}
        decrease={decrease} />
    </div>
  );
}

export default App;
