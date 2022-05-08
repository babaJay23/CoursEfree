import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Trial from './components/Trial/Trial';
import Tutorial from './components/Tutorials/Tutorial';
import Free from './components/Free/Free';
const  App = () => {
  return (
    <div className="App">
      <Navbar about={'About'} trial={'Trial'} tutorials={'Tutorials'} free={'Win a Course'} testimonials={'Testimonials'}/>
      <Home />
      <About />
      <Trial />
      <Tutorial text={'Try Now'} />
      <Free />
    </div>
  );
}

export default App;
