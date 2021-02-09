import React, { useState, useMemo } from 'react'; 
import './App.css'
import Home from './pages/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SigninPage from './pages/signin';
import { UserContext } from './UserContext';
import Property from './pages/property'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Admin from './components/Admin';
function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({user, setUser}), [user, setUser]);

  const[isOpen, setIsOpen] = useState(false);
    const toggle = () =>  {
        setIsOpen(!isOpen)
    }
  return (
    <Router>
        <UserContext.Provider value={value}>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/signin' component={SigninPage} exact/>
        <Route path='/property' component={Property} exact/>
        <Route path='/inkoadmin' component={Admin} exact/>
      </Switch>
      </UserContext.Provider>
    </Router>

  );
}

export default App;