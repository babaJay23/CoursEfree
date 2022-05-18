import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Trial from './components/Trial/Trial';
import Tutorial from './components/Tutorials/Tutorial';
import Free from './components/Free/Free';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login/Login';
const  App = () => {
  return (
    <Router>
      <div className="App">
      <Navbar about={'About'} trial={'Trial'} tutorials={'Tutorials'} free={'Win a Course'} testimonials={'Testimonials'}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trial" element={<Trial />} />
        <Route path="/tutorials" element={<Tutorial text={'Try Now'} />} />
        <Route path="/free" element={<Free />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
