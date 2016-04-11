import React from 'react'
import { Link } from 'react-router'

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="clearfix top">
        <div className="content">
          <h2>看知乎 with React</h2>
          <ul role="nav" className="nav">
            <li><Link to="/">首页</Link></li>
          </ul>
        </div>
      </div>
      )
  }
}