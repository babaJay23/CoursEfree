import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

const  App = () => {
  return (
    <div className="App">
      <Navbar about={'About'} trial={'Trial'} tutorials={'Tutorials'} free={'Win a Course'} testimonials={'Testimonials'}/>
      <Home />
    </div>
  );
}

export default App;
