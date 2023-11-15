import './App.css';
import { Route, Routes } from 'react-router-dom';
//Importo BrowserRouter y al ponerle "as Router" le estoy dando un nuevo nombre a este BrowserRouter, un "alias"
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Home from './components/Home/Home';
import PaginaNueva from './components/PaginaNueva/PaginaNueva';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/EjemploEcommerce/ItemListContainer'
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ejemplo" element={<PaginaNueva />} />
        <Route path="/productos" element={<ItemListContainer/>}/>
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
      </>
  );
};

export default App;
