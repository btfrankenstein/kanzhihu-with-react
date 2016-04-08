import React from 'react'
import QuestionTitle from './QuestionTitle'
import AnswerContent from './AnswerContent'

export default class Answer extends React.Component {
  render() {
    if (this.props.data.answers) {
      var answerNodes = this.props.data.answers.map((answer, index) => {
      return (
        <div className="answerNodes" key={index}>
          <QuestionTitle title={answer.title} questionid={answer.questionid} />
          <AnswerContent answer={answer} />
        </div>
        )
    })
    }
    return (
      <div className="answer">{answerNodes}</div>
      )
  }
}