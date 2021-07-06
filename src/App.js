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
} from "@fortawesome/free-solid-svg-icons";

import Contact from './components/contacts/Contact';

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
);

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/contacts" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
