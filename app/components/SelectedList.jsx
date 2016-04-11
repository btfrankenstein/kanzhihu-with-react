import React from 'react'
import Answer from './Answer'
import {get} from '../utils/ajax';
import $ from 'jquery'

export default class SelectedList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {data:{}}
  }
  componentDidMount() {
    $.ajax({
      url: "http://api.kanzhihu.com/getpostanswers/"+ this.props.params.date + "/" + this.props.params.name,
      method: "GET",
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(shr, status, err) {
        console.error(this.props.url, status, error.toString());
      }.bind(this)
    })
  }
  render() {
    return (
      <Answer data={this.state.data} />
      )
  }
}