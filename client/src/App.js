import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Trial from './components/Trial/Trial';
import Tutorial from './components/Tutorials/Tutorial';
import Free from './components/Free/Free';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router} from 'react-router-dom';
import Courses from './components/Courses/Courses';
const  App = () => {
  return (
    <Router>
      <div className="App">
      <Navbar about={'About'} resources={"Resources"} trial={'Trial'} tutorials={'Tutorials'} free={'Win a Course'} testimonials={'Testimonials'} courses={"Courses"} />
      <Home />
      <About />
      <Trial />
      <Tutorial text={'Try Now'} />
      <Courses />
      <Free />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
