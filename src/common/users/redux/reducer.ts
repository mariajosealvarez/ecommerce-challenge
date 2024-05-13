import { ActionType, SIGN_UP_USER_FAILURE, SIGN_UP_USER_REQUEST, SIGN_UP_USER_SUCCESS } from './actions'

export type UsersStateType = {
  isLoading: boolean // this can be improved to have different loading states for sign in and sign up
  registeredUsers: User[]
  error: string
}

const initialState: UsersStateType = {
  isLoading: false,
  registeredUsers: [],
  error: '',
}

export const usersReducer = (state: UsersStateType = initialState, action: ActionType | any) => {
  switch (action.type) {
    case SIGN_UP_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case SIGN_UP_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        registeredUsers: [...state.registeredUsers, action.user],
      }
    case SIGN_UP_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state
  }
}
