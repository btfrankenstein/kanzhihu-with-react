import React from 'react'
import AnswerSummary from './AnswerSummary'

export default class AnswerContent extends React.Component {
  render() {
    return (
      <div className="answerContent">
          {/*
          UserImg url={this.props.answer.avatar}
          */}
          <AnswerSummary text={this.props.answer.summary} authorname={this.props.answer.authorname} vote={this.props.answer.vote} authorhash={this.props.answer.authorhash} />
      </div>
      )
  }
}