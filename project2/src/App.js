import './App.css';
import Home from './Component/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Param1 from './Component/Params/Param1';
import Param2 from './Component/Params/Param2';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path='/param1' element={<Param1 />} />
          <Route path='/param2/:id' element={<Param2 />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;


