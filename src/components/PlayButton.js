import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const PlayButton = ({label, primary, onClick, style}) => (
  <div>
    <RaisedButton label={label} primary={primary} onClick={onClick} style={style} />
  </div>
)

export default PlayButton