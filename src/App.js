
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedRoutes from './components/AnimatedRoutes';
// import AnimatedRoutes from './components/AnimatedRoutes'
// import Zoom from 'react-reveal/Zoom';
function App() {
 return (
<>
    <Router>
    <Navbar/>
    <AnimatedRoutes/>
    </Router>

</>
  );
}

export default App;
