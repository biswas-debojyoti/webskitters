import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import About from './Components/About/About';
import Detail from './Components/Detail/Detail';
import Home from './Components/Home/Home';
import Params1 from './Components/Params/Params1';
import Params2 from './Components/Params/Params2';
import Params3 from './Components/Params/Params3';
import Header from './Shere_Module/Header/Header';





function App() {
  return (
    <div className="App">
hi
      <Router>
        <Header/>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Detail' element={<Detail/>} />


          {/*       PARMS       */}


          <Route path='/Params1' element={<Params1/>} />
          <Route path='/Params2/:id' element={<Params2/>} />
          <Route path='/Params3/:id/:class' element={<Params3/>} />

        </Routes>

      </Router>

    </div>
  );
}

export default App;


