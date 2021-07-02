import Header from './components/Header/Header';
import './styles/modern-normalize.css';
import './App.css';
import {Hero} from "./components/Hero/Hero";
import {Products} from "./components/Products/Products"
import {Popular} from "./components/Popular/Popular"
import {DogCare} from "./components/DogCare/DogCare"
import {Subscription} from "./components/Subsription/Subsription"

function App() {
  return (
    <div className="App container">
      <Header/>
      <Hero/>
      <Products/>
      <Popular/>
      <DogCare/>
      <Subscription/>
    </div>
  );
}

export default App;
