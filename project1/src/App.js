import logo from './logo.svg';
import './App.css';
import Contact from './component/Contact/Contact';
import About from './component/About/About';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
   {/* <Home/>
   <About/>
   <Contact/> */}
   <Navbar/>
    </div>
  ); 
}

export default App;
