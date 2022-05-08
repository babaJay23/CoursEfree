import './App.css';
import Navbar from './components/Navbar/Navbar';

const  App = () => {
  return (
    <div className="App">
      <Navbar about={'About'} trial={'Trial'} tutorials={'Tutorials'} free={'Win a Course'} testimonials={'Testimonials'}/>
    </div>
  );
}

export default App;
