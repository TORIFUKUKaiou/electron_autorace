import React, { Componet } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Player from './Player.js'
import MyDatePicker from './MyDatePicker'
import SelectPlace from './SelectPlace'
import SelectRaceNumber from './SelectRaceNumber'
import PlayButton from './PlayButton'
import ContinueToggle from './ContinueToggle'

import { actionCreators } from '../reducer/reducer'

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
  state = {}

  componentWillMount() {
    const {store} = this.props

    const {date, place, race, playing, toggled} = store.getState()
    this.setState({date, place, race, playing, toggled})

    this.unsubscribe = store.subscribe(() => {
      const {date, place, race, playing, toggled} = store.getState()
      this.setState({date, place, race, playing, toggled})
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleDateChange  = (_, date) => {
    const {store} = this.props
    store.dispatch(actionCreators.updateDate(date))
  }
  handlePlaceChange = (event, index, value) => { 
    const {store} = this.props
    store.dispatch(actionCreators.updatePlace(value))
  }
  handleRaceNumberChange = (event, index, value) => {
    const {store} = this.props
    store.dispatch(actionCreators.updateRace(value))
  }
  handleOnClickListener = e => {
    const {store} = this.props
    const {playing} = store.getState()
    store.dispatch(actionCreators.updatePlaying(!playing))
  }
  onToggle = (event, isInputChecked) => {
    const {store} = this.props
    store.dispatch(actionCreators.updateToggle(isInputChecked))
  }
  onEnded = () => {
    const {store} = this.props
    const {race, toggled, playing} = store.getState()
    if (!toggled) {
      return
    }
    if (race >= 12) {
      return
    }
    store.dispatch(actionCreators.updateRace(race + 1))
    if (!playing) {
      store.dispatch(actionCreators.updatePlaying(true))
    }
  }
  onPause = () => {
    const {store} = this.props
    const {playing} = store.getState()
    if (playing) {
      store.dispatch(actionCreators.updatePlaying(false))
    }
  }
  onPlay = () => {
    const {store} = this.props
    const {playing} = store.getState()
    if (!playing) {
      store.dispatch(actionCreators.updatePlaying(true))
    }
  }

  buildUrl = () => {
    return 'http://sp-auto.digi-c.com/autorace/_definst_/' + this.state.place + '/'
     + this.state.date.getFullYear() + '/' + this.state.place + '_'
     + this.state.date.getFullYear()
     + z2(this.state.date.getMonth() + 1)
     + z2(this.state.date.getDate())
     + '_' + z2(this.state.race) + '/playlist.m3u8'
  }

  render () {
    const {date, place, race, playing, toggled} = this.state

    return (
      <MuiThemeProvider>
        <div style={style.container}>
          <div>
            <MyDatePicker onChange={this.handleDateChange} value={date} />
            <SelectPlace  onChange={this.handlePlaceChange} value={place} />
            <SelectRaceNumber  onChange={this.handleRaceNumberChange} value={race} />
            <PlayButton label={playing ? "Pause" : "Play"} primary={!playing} onClick={this.handleOnClickListener} style={style.button} />
            <ContinueToggle toggled={toggled} onToggle={this.onToggle} />
          </div>
          <Player 
            url={this.buildUrl()}
            playing={playing}
            onEnded={this.onEnded}
            onPause={this.onPause}
            onPlay={this.onPlay}
          />
        </div>
      </MuiThemeProvider>
    )
  }
}
