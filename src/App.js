import Header from './components/Header/Header'
import './styles/modern-normalize.css'
import './App.css'
import Home from './layouts/Home/Home'
import Blog from './layouts/Blog/Blog'
import Contacts from './layouts/Contacts/Contacts'
import { Switch, Route } from 'react-router-dom'
import DogCarePage from './layouts/DogCare/DogCare'
import { Register } from './layouts/Register/Register'


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
      </Switch>
    </div>
  )
}

export default App
