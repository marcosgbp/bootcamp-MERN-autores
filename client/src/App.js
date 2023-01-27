
import AutorApp from './components/AutorApp';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AutorApp />      
      </BrowserRouter>
    </div>
  );
}

export default App;
