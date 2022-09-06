import './App.css';
import Header from "./components/Header"
import Card from './components/Card';
import Hero from './components/Hero';
import data from './data';

function App() {
  const cards = data.map((d)=> {
    return (
    <Card key={d.id}
      {...d}/>
    )
  })
 
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <div className='cards-element'>{cards}</div>
    </div>
  )  
}

export default App;