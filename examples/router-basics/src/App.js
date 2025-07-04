import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
      <Routes>
        <Route path='/Home' element = {<Home />} />
        <Route path='/About' element = {<About />} />

      </Routes>

    </BrowserRouter>
      
    </div>
  );
}

export default App;
