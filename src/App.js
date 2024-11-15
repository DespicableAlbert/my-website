import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout'; // Import Layout component
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
    return (
        <Router>
            <Routes>
                {/* Wrap all routes under the Layout */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;