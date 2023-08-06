import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import Gallery from './pages/gallery';
import Education from './pages/educationpage';
import Home from './pages/Home';
import Blog from './pages/Blog';
import { Route, Router, Routes, BrowserRouter } from 'react-router-dom';
import 


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Route exact path='/' Component={<Home />} />
          <Route exact path='/gallery' Component={<Home />} />
          <Route exact path='/blog' Component={<Home />} />
          <Route exact path='/education' Component={<Education /> }/>
        </Router>    
      </BrowserRouter>
    </div>
  );
}

export default App;
