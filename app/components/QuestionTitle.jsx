import React from 'react'

export default class QuestionTitle extends React.Component{
  render() {
    return (
      <a href={"http://www.zhihu.com/question/" + this.props.questionid}>
        <p className="title">
          {this.props.title}
        </p>
      </a>
      );
  }
}