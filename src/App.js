import React, {useContext} from 'react';
import News from './components/News'
import User from './components/User'
import DetailPage from './components/DetailPage'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AdminContext from './context/AdminContext'

function App() {
  const {idItem} = useContext(AdminContext)
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={News} />
          <Route path="/user" component={User} />
          <Route path={`/news/${idItem}`} component={DetailPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
