import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './containers/Login/Login';
import Welcome from './containers/Welcome/Welcome';
import DisplayTable from './containers/DisplayTable/DisplayTable';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/welcomepage" component={Welcome} />
          <Route path="/displaytable" component={DisplayTable} />
        </Switch>
      </div>
    );
  }
}

export default App;
