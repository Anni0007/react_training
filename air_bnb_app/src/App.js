import './App.css';
import Header from "./components/Header"
import Card from './components/Card';
import Hero from './components/Hero';
import data from './data';

function App() {
  const cards = data.map((d)=> {
    return (
    <Card img={d.img} 
     rating = {d.rating}
     title = {d.title} 
     country= {d.country}
     pricing = {d.pricing}/>
    )
  })
 
  return (
    <div className="App">
      <Header/>
      <Hero/>
      {cards}
    </div>
  )  
}

export default App;