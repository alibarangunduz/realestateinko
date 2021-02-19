import React, { useState, useMemo } from "react";
import "./App.css";
import Home from "./pages/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SigninPage from "./pages/signin";
import { UserContext } from "./UserContext";
import Property from "./pages/property";
import AdminPage from "./pages/adminpage";
import KategoriSec from "./components/Admin/pages/kategoriSec";

function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <UserContext.Provider value={value}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={SigninPage} exact />
          <Route path="/property" component={Property} exact />
          <Route path="/inkoadmin" component={AdminPage} exact />
          <Route path="/inkoadmin/kategorisec" component={KategoriSec} exact />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
