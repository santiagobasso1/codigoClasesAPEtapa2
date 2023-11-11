import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Home from './components/Home/Home';
import PaginaNueva from './components/PaginaNueva/PaginaNueva';
import NotFound from './components/NotFound/NotFound';
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ejemplo" element={<PaginaNueva />} />
        <Route path='/*' element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default App;
