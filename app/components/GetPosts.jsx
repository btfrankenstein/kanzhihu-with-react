import React from 'react'
import $ from 'jquery'
import Posts from './Posts'

export default class GetPosts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {data:{}}
  }
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
      <Posts data={this.state.data} />
    </div>
    )
  }
}