import React from 'react';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import Countries from './Pages/Countries';
import './App.scss';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/">
            <div></div>
          </Route>
          <Route exact path="/countries" component={Countries} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
