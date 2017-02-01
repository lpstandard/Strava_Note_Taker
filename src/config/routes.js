import React from "react";
import Main from "../Components/Main";
import Home from "../Components/Home";
import Profile from "../Components/Profile";
import {Route, IndexRoute} from 'react-router';

export default (
  <Route path='/' component={Main}>
    <Route path='profile/:username' component={Profile} />
    <IndexRoute component={Home} /> 
  </Route>
)
