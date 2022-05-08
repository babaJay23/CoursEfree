import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Trial from './components/Trial/Trial';

const  App = () => {
  return (
    <div className="App">
      <Navbar about={'About'} trial={'Trial'} tutorials={'Tutorials'} free={'Win a Course'} testimonials={'Testimonials'}/>
      <Home />
      <About />
      <Trial />
    </div>
  );
}

export default App;
