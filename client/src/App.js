import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Trial from './components/Trial/Trial';
import Tutorial from './components/Tutorials/Tutorial';
import Free from './components/Free/Free';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './components/Register/Register';
const  App = () => {
  return (
    <Router>
      <div className="App">
      <Navbar about={'About'} trial={'Trial'} tutorials={'Tutorials'} free={'Win a Course'} testimonials={'Testimonials'}/>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      <Home />
      <About />
      <Trial />
      <Tutorial text={'Try Now'} />
      <Free />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
