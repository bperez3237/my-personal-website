import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Navbar/>
      </div>
      <div className='App-body'>
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
