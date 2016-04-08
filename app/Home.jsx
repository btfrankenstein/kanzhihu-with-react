import React from 'react'
import { Link } from 'react-router'
import $ from 'jquery'
import Posts from './components/Posts'

export default class Home extends React.Component{
  componentDidMount() {
    $.ajax({
      url: 'http://api.kanzhihu.com/getposts',
      method: 'GET',
      success: (data) => {
        this.setState({data: data})
      },
      error: function(shr, status, err) {
         console.error(this.props.url, status, error.toString());
      }.bind(this)
    })
  }
  render() {
    return(
    <div className="content">
    <h1>React Kanzhihu</h1>
       <ul role="nav">
         <li><Link to="/">NavBar</Link></li>
       </ul>
       {this.props.children}
      <Posts data={this.state.data} />
    </div>
    )
  }
}