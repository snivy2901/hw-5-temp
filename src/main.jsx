import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import App from "./App"
import Home from './components/pages/Home';
import Project from './components/pages/Project';
import Dataset from './components/pages/Dataset';
import Navbar from './components/Navbar';

const rootElement = document.getElementById('root');
render(
  <Router>
    <Navbar />
    {/*Sets Routes:*/}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Dataset" element={<Dataset />} />
    </Routes>
  </Router>,
  rootElement
);
