import React from 'react'
import Navigation from './components/Navigation'

export default class Home extends React.Component {
  render() {
    return(
    <div>
      <Navigation />
      <div className="content">
        {this.props.children}
      </div>
    </div>
    )
  }
}