import React from 'react'
import ReactPlayer from 'react-player'

const Player = ({url, playing, onEnded}) => (
  <ReactPlayer url={url} playing={playing} controls onEnded={onEnded}/>
)

export default Player