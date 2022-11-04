import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='App-body'>
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
