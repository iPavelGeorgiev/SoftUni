import React from "react";
import Publications from "./pages/Publications/Publications";
import ShareThoughts from "./pages/ShareThoughts/ShareThoughts";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Publications} />
        <Route path="/share" component={ShareThoughts} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
