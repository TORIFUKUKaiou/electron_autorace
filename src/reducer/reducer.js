export const types = {
  UPDATE_DATE:    'UPDATE_DATE',
  UPDATE_PLACE:   'UPDATE_PLACE',
  UPDATE_RACE:    'UPDATE_RACE',
  UPDATE_PLAYING: 'UPDATE_PLAYING',
  UPDATE_TOGGLE:  'UPDATE_TOGGLE'
}

export const actionCreators = {
  update_date: (item) => {
    return {type: types.UPDATE_DATE, payload: item}
  },
  update_place: (item) => {
    return {type: types.UPDATE_PLACE, payload: item}
  },
  update_race: (item) => {
    return {type: types.UPDATE_RACE, payload: item}
  },
  update_playing: () => {
    return {type: types.UPDATE_PLAYING}
  },
  update_toggle: (item) => {
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