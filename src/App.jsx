import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SmallGallery from "./components/smallGallery/SmallGallery";
import Header from "./components/header/Header";


const App = () => (
  <Router>
    <Header />
    <SmallGallery />

    <Switch>
      <Route path="/about-us">
        <Home />
      </Route>

      <Route path="/contact">
        <Home />
      </Route>

      <Route path="/products">
        <Home />
      </Route>

      <Route path="/gallery">
        <>Elo</>
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
