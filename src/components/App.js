import React, { Componet } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Player from './Player.js'
import MyDatePicker from './MyDatePicker'
import SelectPlace from './SelectPlace'
import SelectRaceNumber from './SelectRaceNumber'
import PlayButton from './PlayButton'

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

    const {date, place, race, playing} = store.getState()
    this.setState({date, place, race, playing})

    this.unsubscribe = store.subscribe(() => {
      const {date, place, race, playing} = store.getState()
      this.setState({date, place, race, playing})
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleDateChange  = (_, date) => {
    const {store} = this.props
    store.dispatch(actionCreators.update_date(date))
  }
  handlePlaceChange = (event, index, value) => { 
    const {store} = this.props
    store.dispatch(actionCreators.update_place(value))
  }
  handleRaceNumberChange = (event, index, value) => {
    const {store} = this.props
    store.dispatch(actionCreators.update_race(value))
  }
  handleOnClickListener = e => {
    const {store} = this.props
    store.dispatch(actionCreators.update_playing())
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
    const {date, place, race, playing} = this.state

    return (
      <MuiThemeProvider>
        <div style={style.container}>
          <div>
            <MyDatePicker onChange={this.handleDateChange} value={date} />
            <SelectPlace  onChange={this.handlePlaceChange} value={place} />
            <SelectRaceNumber  onChange={this.handleRaceNumberChange} value={race} />
            <PlayButton label={playing ? "Pause" : "Play"} primary={!playing} onClick={this.handleOnClickListener} style={style.button} />
          </div>
          <Player 
            url={this.buildUrl()}
            playing={playing}
          />
        </div>
      </MuiThemeProvider>
    )
  }
}
