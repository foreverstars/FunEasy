import React from "react"
import {Router, Route , IndexRoute , hashHistory } from "react-router"
import AppContainer from "../containers/Appcontainer"
import HomeContainer from "../containers/Homecontainer"

import MovieContainer from "../containers/Moviecontainer"
import HotContainer from "../containers/Hotcontainer"
import MusicContainer from "../containers/Musiccontainer"
import BookContainer from "../containers/Bookcontainer"

import MovieDetail from "../components/movie/MovieDetail"

const RootRoot = (
  <Router history={ hashHistory }>
    <Route path="/" component={ AppContainer }>
        <IndexRoute  component={ HomeContainer }/>
        <Route path ="/movie" component={ MovieContainer }/>
        <Route path = "/movie/detail/:id" component={ MovieDetail } />
        <Route path ="/hot" component={ HotContainer }/>
        <Route path ="/music" component={ MusicContainer }/>
        <Route path ="/book" component={ BookContainer }/>
    </Route>
  </Router>
)
export default RootRoot

