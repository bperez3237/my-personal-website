import './App.css';
import Home from './components/About/Home';
import Projects from './components/Projects/Projects';
import Connect from './components/Connect/Connect';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='App-body'>
        <Sidebar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/connect' element={<Connect />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
