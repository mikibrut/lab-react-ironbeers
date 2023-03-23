
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Beers from './pages/Beers';
import DetailBeer from './pages/DetailBeer';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />}/>
        <Route path="/beers/:beerId" element={<DetailBeer/>}/>
        <Route path="/random-beer" element={<RandomBeer/>}/>
        <Route path="/new-beer" element={<NewBeer/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
