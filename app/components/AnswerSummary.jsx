import React from 'react'

export default class AnswerSummary extends React.Component {
  render() {
    return (
      <div className="summary">
        <a href={"http://www.zhihu.com/people/"+this.props.authorhash}>{this.props.authorname}</a>
        <span className="vote">({this.props.vote}赞同)</span>
        {this.props.text}
      </div>
      )
  }
}