
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import About from './Components/About/About';
import Detail from './Components/Detail/Detail';
import Home from './Components/Home/Home';
import Params1 from './Components/Params/Params1';
import Params2 from './Components/Params/Params2';
import Params3 from './Components/Params/Params3';
import Params4 from './Components/Params/Params4';
import Header from './Shere_Module/Header/Header';





function App() {
  return (
    <div className="App">

      <Router>
        <Header/>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Detail' element={<Detail/>} />


          {/*       PARMS       */}


          <Route path='/Params1' element={<Params1/>} />
          <Route path='/Params2/lion' element={<Params2/>} />
          <Route path='/Params3/tiger' element={<Params3/>} />
          <Route path='/Params4/tiger/:id' element={<Params4/>} />

        </Routes>

      </Router>

    </div>
  );
}

export default App;



