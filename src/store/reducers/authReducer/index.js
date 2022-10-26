const localStorageToken = localStorage.getItem('token')

const initialState = {
  token: localStorageToken,
}

export const SET_TOKEN = 'set_token'
export const REMOVE_TOKEN = 'remove_token'

export const setToken = (dispatch, value) => {
  dispatch({
    type: 'set_token',
    payload: {
      token: value,
    },
  })
}

export const setUsername = (dispatch, username) => {
  dispatch({
    type: 'set_token',
    payload: {
      username: username,
    },
  })
}

const authReducer = (state = initialState, action) => {
  console.log('>> AUTH REDUCER', state, action)

  switch (action.type) {
    case SET_TOKEN:
      console.log('>> AUTH REDUCER SET TOKEN', action.payload)
      return {
        ...state,
        token: action.payload.token,
      }

    case REMOVE_TOKEN:
      return {
        ...state,
        token: null,
      }

    default:
      return state
  }
}

export default authReducer
