import React,{useEffect, useState}  from 'react';
import Header from './components/Header/Header';
import Countries from './Pages/Countries';
import Infected from './Pages/Infected';
import './App.scss';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

function App() {

  const [infected, setInfected] = useState([]);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header infected={infected}/>
        <Switch>
          <Route exact path="/">
            <div></div>
          </Route>
          <Route exact path="/infected">
            <Infected infected={infected} setInfected={setInfected} />
          </Route> 
          <Route exact path="/countries" component={Countries} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
