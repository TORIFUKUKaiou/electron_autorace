export const types = {
  UPDATE_DATE:    'UPDATE_DATE',
  UPDATE_PLACE:   'UPDATE_PLACE',
  UPDATE_RACE:    'UPDATE_RACE',
  UPDATE_PLAYING: 'UPDATE_PLAYING',
  UPDATE_TOGGLE:  'UPDATE_TOGGLE'
}

export const actionCreators = {
  updateDate: (item) => {
    return {type: types.UPDATE_DATE, payload: item}
  },
  updatePlace: (item) => {
    return {type: types.UPDATE_PLACE, payload: item}
  },
  updateRace: (item) => {
    return {type: types.UPDATE_RACE, payload: item}
  },
  updatePlaying: () => {
    return {type: types.UPDATE_PLAYING}
  },
  updateToggle: (item) => {
    return {type: types.UPDATE_TOGGLE, payload: item}
  }
}

const initialState = {
  date:   new Date(),
  place:  'kawaguchi',
  race:   6,
  playing:   false,
  toggled:   true
}

export const reducer = (state = initialState, action) => {
  const {date, place, race, playing, toggled} = state
  const {type, payload} = action

  switch (type) {
    case types.UPDATE_DATE: {
      return {
        ...state,
        date: payload,
      }
    }
    case types.UPDATE_PLACE: {
      return {
        ...state,
        place: payload,
      }
    }
    case types.UPDATE_RACE: {
      return {
        ...state,
        race: payload,
      }
    }
    case types.UPDATE_PLAYING: {
      return {
        ...state,
        playing: !playing,
      }
    }
    case types.UPDATE_TOGGLE: {
      return {
        ...state,
        toggled: payload,
      }
    }
  }

  return state
}