import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Card from './components/Card';
import Hero from './components/Hero';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Card/>
    </div>
  )
}

export default App;