import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import 'antd';
import HeaderMenu from './Components/Design/Header';
import Create from './Components/Users/Create';
import Update  from './Components/Users/Update';
import Index from './Components/Users/Index';
import UserList from './Components/Users/UserList';
import SignPage from './Components/Users/SignForm'

function App() {
  return (
    <Router> 
      <HeaderMenu />
          <Switch>
              <Route exact path ={'/'} component={SignPage} />
              <Route exact path='/users/Index' component={ Index } />
              <Route path='/users/create' component={ Create } />
              <Route path='/users/edit/:id' component={ Update } />
              <Route path='/users/list' component={ UserList } />
          </Switch>
  </Router>
  );
}

export default App;
