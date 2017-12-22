import React, { Componet } from 'react'
import ReactDOM from 'react-dom'
import Player from './Player.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MyDatePicker from './MyDatePicker'
import SelectPlace from './SelectPlace'
import RaisedButton from 'material-ui/RaisedButton'
import SelectRaceNumber from './SelectRaceNumber'

const style = {
  container: {
    display: 'flex'
  },
  button: {
    margin: 12
  }
}

const z2 = (v) => {
  const s = '00' + v
  return s.substr(s.length - 2, 2)
}


export default class App extends React.Component {
  state = {
    date:   new Date(),
    place:  'kawaguchi',
    race:   12,
    playing:   false

  }

  handleDateChange  = (_, date) => { this.setState({date: date}) }
  handlePlaceChange = (event, index, value) => this.setState({place: value})
  handleRaceNumberChange = (event, index, value) => this.setState({race: value})
  handleOnClickListener = e => this.setState({playing: !this.state.playing})

  buildUrl = () => {
    return 'http://sp-auto.digi-c.com/autorace/_definst_/' + this.state.place + '/'
     + this.state.date.getFullYear() + '/' + this.state.place + '_'
     + this.state.date.getFullYear()
     + z2(this.state.date.getMonth() + 1)
     + z2(this.state.date.getDate())
     + '_' + z2(this.state.race) + '/playlist.m3u8'
  }

  render () {
    return (
      <MuiThemeProvider>
        <div style={style.container}>
          <div>
            <MyDatePicker onChange={this.handleDateChange} value={this.state.date} />
            <SelectPlace  onChange={this.handlePlaceChange} value={this.state.place} />
            <SelectRaceNumber  onChange={this.handleRaceNumberChange} value={this.state.race} />
            <div><RaisedButton label={this.state.playing ? "Pause" : "Play"} primary={!this.state.playing} onClick={this.handleOnClickListener} style={style.button} /></div>
          </div>
          <Player 
            url={this.buildUrl()}
            playing={this.state.playing}
          />
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)