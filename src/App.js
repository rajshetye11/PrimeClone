import './App.css';
import Header from './Header';
import Home from './Home';
// import {BrowserRouter, Route as Router} from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Movies from "./Movies"
import MovieHeader from './MovieHeader'

function App() {
  return (
    
    <div className="app">
      <Router>
        {/* <Header/> */}
        <Switch>
        <Route exact path ="/">
          <Header/>
          <Home/>
        </Route>
        <Route exact path ="/movie">
          <MovieHeader/>
          <Movies/>
        </Route>
      {/* <Header/> */}
      
      </Switch>
      {/* <Home/> */}
      </Router>
    </div>

  );
}

export default App;
