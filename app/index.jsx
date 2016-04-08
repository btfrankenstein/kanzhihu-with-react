import { Router, hashHistory } from 'react-router'
import routes from './routes'
import React from 'react'
import { render } from 'react-dom'
import './style/main.scss'

render(
  <Router routes={routes} history={hashHistory}/>,
  document.getElementById('wrapper')
)

