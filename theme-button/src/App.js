import './App.css';
import { EasyButton } from './EasyButton/EasyButton';


function App() {
  return (
    <div className="App">
      <h1>Hit the easy button!</h1>
      <EasyButton text={'easy'} onClick={()=>alert('it was easy')}/>
      
    </div>
  );
}

export default App;
