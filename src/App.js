import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import Gallery from './pages/gallery';
import Education from './pages/educationpage';
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="App">
      {/* <Education/> */}
      {/* <Gallery/> */}
      {/* <Home /> */}
      <Blog />
    </div>
  );
}

export default App;
