import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import DownHeader from './components/downheader';
import Heroarea from './components/heroarea';

function App() {
  return (
    <div className="App">
      <DownHeader/>
      <Header/>
      <Heroarea/>
    </div>
  );
}

export default App;
