import React from 'react'
import { Link } from 'react-router'

export default class Posts extends React.Component {
  render() {
    if(this.props.data.posts) {
      var postNodes = this.props.data.posts.map((post) => {
        var date = post.date.split('-').join('')
        var name = post.name
        return (
          <div className="postLink answerNodes">
            <Link to={"/getpostanswers/" + date + "/" + name}>{post.excerpt}</Link>
          </div>
        )
      })
    }

    return (
      <div className="postNodes">
        {postNodes}
      </div>
      )
  }
}