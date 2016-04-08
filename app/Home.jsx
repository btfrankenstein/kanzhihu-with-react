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
    <h2>看知乎 with React</h2>
       <ul role="nav" className="nav">
         <li><Link to="/">首页</Link></li>
       </ul>
       {this.props.children}
      <Posts data={this.state.data} />
    </div>
    )
  }
}