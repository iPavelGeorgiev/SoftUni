import React from "react";
import Publications from "./pages/Publications/Publications";
import ShareThoughts from "./pages/ShareThoughts/ShareThoughts";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Authorization from "./Authorization";
import Profile from "./pages/Profile/Profile";
import InvalidPath from "./pages/InvalidPath/InvalidPath";
import UserContext from "./Context";

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

const App = () => {
  return (
    <Authorization>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Publications} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/share" component={ShareThoughts} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="*" component={InvalidPath} />
        </Switch>
      </BrowserRouter>
    </Authorization>
  );
}

export default App;
