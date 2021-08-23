import './App.css';
import {Footer, Navigation} from './Components'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home, About, Contact} from './Pages'
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
          <Switch>
            <Route exact path="/" component={Home}/>  
            <Route exact path="/about" component={About}/>
            <Route exact paht="/contact" component={Contact}/>
          </Switch>
        <Footer/> 
      </Router>
    </div>
  );
}

export default App;
