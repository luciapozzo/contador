import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button 
        operation='+'
        increaseBtn={true} />
      <Button
        operation='-'
        increaseBtn={false} />
    </div>
  );
}

export default App;
