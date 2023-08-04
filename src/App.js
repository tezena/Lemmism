import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"
import Gallery from './pages/gallery';
import Education from './pages/educationpage';

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* // <Gallery/> */}
      <Education/>
    </div>
  );
}

export default App;
