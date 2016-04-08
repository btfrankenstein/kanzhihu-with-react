import React from 'react'
import { Route } from 'react-router'
import SelectedList from './components/SelectedList'
import Posts from './components/Posts'
import Home from './Home'

module.exports = (
  <div>
    <Route path="/" component={Home}>
      <Route path="/post" component={Posts} />
      <Route path="/getpostanswers/:date/:name" component={SelectedList} />
    </Route>
  </div>
  )
