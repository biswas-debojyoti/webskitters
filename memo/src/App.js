import './App.css';
import About from './Components/About/About';
import Detail from './Components/Detail/Detail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import Header from './Sheared_module/Header/Header';
import Parent from './Memo/Parent/Parent';
function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/Parent" element={<Parent/>} />
        </Routes>
      </Router>




    </div>
  );
}

export default App;

