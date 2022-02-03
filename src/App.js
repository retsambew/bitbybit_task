import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/navbar/NavBar.js';
import {Home} from './components/home/Home.js';
import {About} from './components/about/About.js';
import {Cards} from './components/cards/Cards.js';
import {Carousel} from './components/carousel/index.js';
import {KnowMore} from './components/knowmore/KnowMore.js';
import {Footer} from './components/footer/Footer.js';

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Cards/>
      <Carousel/>
      <KnowMore/>
      <Footer/>
    </div>
  );
}

export default App;
