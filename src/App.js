import React, { useState, useMemo } from 'react'; 
import './App.css'
import Home from './pages/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SigninPage from './pages/signin';
import { UserContext } from './UserContext';
function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({user, setUser}), [user, setUser]);
  return (
    <Router>
        <UserContext.Provider value={value}>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/signin' component={SigninPage} exact/>
      </Switch>
      </UserContext.Provider>
    </Router>

  );
}

export default App;