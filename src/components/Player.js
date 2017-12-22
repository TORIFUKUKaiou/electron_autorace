import React from 'react'
import ReactPlayer from 'react-player'

const Player = ({url, playing}) => (
  <ReactPlayer url={url} playing={playing} controls />
)

export default Player