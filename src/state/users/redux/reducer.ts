import {
  ActionType,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  SIGN_IN_USER_FAILURE,
  SIGN_IN_USER_REQUEST,
  SIGN_IN_USER_SUCCESS,
  SIGN_UP_USER_FAILURE,
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_SUCCESS,
} from './actions'

export type UsersStateType = {
  isLoading: boolean // this can be improved to have different loading states for sign in and sign up
  signedInUser: string | null // keeps track of the logged user email
  registeredUsers: User[]
  signUpError: string
  signInError: string
}

const initialState: UsersStateType = {
  isLoading: false,
  signedInUser: null,
  registeredUsers: [
    {
      id: 'demo-user-id',
      firstName: 'Demo',
      lastName: 'Demo',
      email: 'demo@test.com',
      password: 'demo',
    },
  ],
  signUpError: '',
  signInError: '',
}

export const usersReducer = (state: UsersStateType = initialState, action: ActionType | any) => {
  switch (action.type) {
    case SIGN_UP_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        signUpError: '',
      }
    case SIGN_UP_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        registeredUsers: [...state.registeredUsers, action.user],
        signUpError: '',
      }
    case SIGN_UP_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        signUpError: action.error,
      }
    case SIGN_IN_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        signInError: '',
      }
    case SIGN_IN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        signedInUser: action.userId,
        signInError: '',
      }
    case SIGN_IN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        signInError: action.error,
      }
    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        signedInUser: null,
      }
    case LOGOUT_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state
  }
}
