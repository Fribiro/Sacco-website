import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './components/homepage/Homepage'

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faMapMarkerAlt,
  faPaperPlane,
  faPhoneAlt,
  faUsers,
  faHandshake,
  faHandsHelping,
  faHistory,
  faGift,
  faLandmark,
  faUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import Contact from './components/contacts/Contact';
import Loancalculator from './components/loancalculator/Loancalculator';

library.add(
  fab,
  faBars,
  faPhoneAlt,
  faPaperPlane,
  faMapMarkerAlt,
  faUsers,
  faHandshake,
  faHandsHelping,
  faHistory,
  faGift,
  faLandmark,
  faUser,
  faEnvelope,
);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/contacts" component={Contact} />
          <Route exact path="/loan-calculator" component={Loancalculator} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
