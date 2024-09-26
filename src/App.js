import './App.css';
import Location from './Components/Location';
import Main from './Components/Main';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Location' element={<Location/>}/>
      </Routes>
    </Router>
   </>
  );
}

export default App;
