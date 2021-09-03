import Header from './components/Header/Header'
import './styles/modern-normalize.css'
import './App.css'
import Home from './layouts/Home/Home'
import Blog from './layouts/Blog/Blog'
import Contacts from './layouts/Contacts/Contacts'
import { Switch, Route } from 'react-router-dom'
import DogCarePage from './layouts/DogCare/DogCare'
import { Register } from './layouts/Register/Register'
import {Products} from './layouts/Products/Products'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App container">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/blog" component={Blog} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/dogcare" component={DogCarePage} />
        <Route path="/register" component={Register} />
        <Route path="/products" component={Products} />
      </Switch>
    </div>
  )
}

export default App
