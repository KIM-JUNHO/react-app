import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Side from './components/Side/Side';
import Home from './pages/Home';
import Request from './pages/Request';
import History from './pages/History';
import Contact from './pages/Contact';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-row h-full">
        <Side />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/request" component={Request} />
          <Route exact path="/history" component={History} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
