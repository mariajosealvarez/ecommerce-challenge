import { AppDispatch, RootState } from '../../../store/store'
import { delayOperation } from '../../../utils/delayOperation'
import { getUserByEmail } from '../../../utils/getUserByEmail'

export const SIGN_UP_USER_REQUEST = 'SIGN_UP_USER_REQUEST'
export const SIGN_UP_USER_SUCCESS = 'SIGN_UP_USER_SUCCESS'
export const SIGN_UP_USER_FAILURE = 'SIGN_UP_USER_FAILURE'

export const SIGN_IN_USER_REQUEST = 'SIGN_IN_USER_REQUEST'
export const SIGN_IN_USER_SUCCESS = 'SIGN_IN_USER_SUCCESS'
export const SIGN_IN_USER_FAILURE = 'SIGN_IN_USER_FAILURE'

export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
export const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE'

// Sign Up Actions
type SignUpUserRequestActionType = {
  type: typeof SIGN_UP_USER_REQUEST
}

type SignUpUserSuccessActionType = {
  type: typeof SIGN_UP_USER_SUCCESS
  user: User
}

type SignUpUserFailureActionType = {
  type: typeof SIGN_UP_USER_FAILURE
  error: string
}

// Sign In Actions
type SignInUserRequestActionType = {
  type: typeof SIGN_IN_USER_REQUEST
}

type SignInUserSuccessActionType = {
  type: typeof SIGN_IN_USER_SUCCESS
  userId: string
}

type SignInUserFailureActionType = {
  type: typeof SIGN_IN_USER_FAILURE
  error: string
}

// Logout Actions
type LogoutUserRequestActionType = {
  type: typeof LOGOUT_USER_REQUEST
}

type LogoutUserSuccessActionType = {
  type: typeof LOGOUT_USER_SUCCESS
}

type LogoutUserFailureActionType = {
  type: typeof LOGOUT_USER_FAILURE
  error: string
}

export type ActionType =
  | SignUpUserRequestActionType
  | SignUpUserSuccessActionType
  | SignUpUserFailureActionType
  | SignInUserRequestActionType
  | SignInUserSuccessActionType
  | SignInUserFailureActionType
  | LogoutUserRequestActionType
  | LogoutUserSuccessActionType
  | LogoutUserFailureActionType

export const signUpUser = (user: User) => async (dispatch: AppDispatch, getState: () => RootState) => {
  dispatch({
    type: SIGN_UP_USER_REQUEST,
  })

  try {
    // delay the parsing to simulate an api request
    await delayOperation()

    const state = getState()
    const { registeredUsers } = state.users
    if (!getUserByEmail(registeredUsers, user.email)) {
      dispatch({
        type: SIGN_UP_USER_SUCCESS,
        user,
      })

      signInUser(user.email, user.password)(dispatch, getState)
    } else {
      throw new Error('The user already exists')
    }
  } catch (error: any) {
    dispatch({
      type: SIGN_UP_USER_FAILURE,
      error: error.message,
    })
  }
}

export const signInUser =
  (email: string, password: string) => async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch({
      type: SIGN_IN_USER_REQUEST,
    })

    try {
      // delay the parsing to simulate an api request
      await delayOperation()

      const state = getState()
      const { registeredUsers } = state.users
      const user = getUserByEmail(registeredUsers, email)

      // Having non encrypted password just for the sake of this challenge, password shouldn't be saved on any store
      if (user?.password === password) {
        dispatch({
          type: SIGN_IN_USER_SUCCESS,
          userId: user.id,
        })
      } else {
        throw new Error('Invalid email or password')
      }
    } catch (error: any) {
      dispatch({
        type: SIGN_IN_USER_FAILURE,
        error: error.message,
      })
    }
  }

export const logout = () => async (dispatch: AppDispatch) => {
  dispatch({
    type: LOGOUT_USER_REQUEST,
  })

  try {
    dispatch({
      type: LOGOUT_USER_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: LOGOUT_USER_FAILURE,
      error,
    })
  }
}
