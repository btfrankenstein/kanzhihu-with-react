import React from 'react'
import { Route, IndexRoute } from 'react-router'
import SelectedList from './components/SelectedList'
import GetPosts from './components/GetPosts'
import Home from './Home'

module.exports = (
  <div>
    <Route path="/" component={Home}>
      <IndexRoute component={GetPosts} />
      <Route path="/getpostanswers/:date/:name" component={SelectedList} />
    </Route>
  </div>
  )
