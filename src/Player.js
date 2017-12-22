import React, { Componet } from 'react'
import ReactPlayer from 'react-player'

export default class Player extends React.Component {
  render () {
    return <ReactPlayer url={this.props.url} playing={this.props.playing} controls />
  }
}