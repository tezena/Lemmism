import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import Gallery from './pages/gallery';
import Education from './pages/educationpage';
import Home from './pages/Home';
import Blog from './pages/Blog';
import { Route, Router, Routes, BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Navigation from './components/NavBar';
import Contact from './pages/contact';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route  path='/gallery' element={<Gallery />} />
          <Route  path='/blog' element={<Blog/>} />
          <Route path='/education' element={<Education />} />
          <Route  path='/contact' element={<Contact /> }/>
        </Routes>  
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
