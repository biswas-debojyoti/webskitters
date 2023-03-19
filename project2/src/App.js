import './App.css';
import Home from './Component/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Param1 from './Component/Params/Param1';
import Param2 from './Component/Params/Param2';
import Header from './Shere_module/Header/Header';
import Footer from './Shere_module/Footer/Footer';
import About from './Component/About/About';



function App() {
  return (
    <div className="App">

      <Router>
        <Header/>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/About' element ={<About/>}/>
          <Route path='/param1' element={<Param1 />} />
          <Route path='/param2/:id' element={<Param2 />} />
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;


