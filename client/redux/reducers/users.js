import axios from 'axios'

const GET_USERS = 'GET_USERS'
const SET_SELECTED = 'SET_SELECTED'
const ALL_SELECTED = 'ALL_SELECTED'

const initialState = {
  userList: [],
  selected: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        userList: action.userList
      }
    case SET_SELECTED:
      if (action.status) {
        return {
          ...state,
          selected: [...state.selected, action.user]
        }
      }
      return {
        ...state,
        selected: [...state.selected.filter((el) => el.id !== action.user.id)]
      }
    case ALL_SELECTED: {
      if (action.status) {
        return { ...state, selected: action.users }
      }
      return { ...state, selected: [] }
    }
    default:
      return state
  }
}

export function getUsers() {
  return (dispatch) => {
    axios('/api/v1/users')
      .then(({ data }) => {
        dispatch({ type: GET_USERS, userList: data })
      })
  }
}

export function isSelected(status, user) {
  return { type: SET_SELECTED, status, user }
}

export const allUsersAreSelected = (status, users) => {
  return { type: ALL_SELECTED, status, users }
}