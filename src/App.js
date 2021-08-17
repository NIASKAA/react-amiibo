import './App.css';
import {Footer, Navigation} from './Components'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home, About} from './Pages'
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
          <Switch>
            <Route exact path="/" component={Home}/>  
          </Switch>
        <Footer/> 
      </Router>
    </div>
  );
}

export default App;
