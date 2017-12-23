import React from 'react'
import ReactPlayer from 'react-player'

const Player = ({url, playing, onEnded, onPause, onPlay}) => (
  <ReactPlayer url={url} playing={playing} onEnded={onEnded} onPause={onPause} onPlay={onPlay} controls/>
)

export default Player