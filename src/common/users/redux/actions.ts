// login
// logout
// register

import { delayOperation } from '../../../utils/delayOperation'

export const SIGN_UP_USER_REQUEST = 'SIGN_UP_USER_REQUEST'
export const SIGN_UP_USER_SUCCESS = 'SIGN_UP_USER_SUCCESS'
export const SIGN_UP_USER_FAILURE = 'SIGN_UP_USER_FAILURE'

export const SIGN_IN_USER_REQUEST = 'SIGN_IN_USER_REQUEST'
export const SIGN_IN_USER_SUCCESS = 'SIGN_IN_USER_SUCCESS'
export const SIGN_IN_USER_FAILURE = 'SIGN_IN_USER_FAILURE'

export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
export const LOGOUT_USER_FAILURE = 'LOGOUT_USER_FAILURE'

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

export type ActionType = SignUpUserRequestActionType | SignUpUserSuccessActionType | SignUpUserFailureActionType

export const signUpUser = (user: User) => async (dispatch: any) => {
  dispatch({
    type: SIGN_UP_USER_REQUEST,
  })

  try {
    // delay the parsing to simulate an api request
    await delayOperation()

    dispatch({
      type: SIGN_UP_USER_SUCCESS,
      user,
    })
  } catch (error: any) {
    console.log(error)
    dispatch({
      type: SIGN_UP_USER_FAILURE,
      error,
    })
  }
}
