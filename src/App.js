import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './globals.css'; // note the path
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Diversions from './Diversions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="diversions" element={<Diversions />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;