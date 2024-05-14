import { delayOperation } from '../../../utils/delayOperation'

// update book quantity
export const ADD_BOOK_REQUEST = 'ADD_BOOK_REQUEST'
export const ADD_BOOK_SUCCESS = 'ADD_BOOK_SUCCESS'
export const ADD_BOOK_FAILURE = 'ADD_BOOK_FAILURE'

export const REMOVE_BOOK_REQUEST = 'REMOVE_BOOK_REQUEST'
export const REMOVE_BOOK_SUCCESS = 'REMOVE_BOOK_SUCCESS'
export const REMOVE_BOOK_FAILURE = 'REMOVE_BOOK_FAILURE'

export const UPDATE_BOOK_QUANTITY_REQUEST = 'UPDATE_BOOK_QUANTITY_REQUEST'
export const UPDATE_BOOK_QUANTITY_SUCCESS = 'UPDATE_BOOK_QUANTITY_SUCCESS'
export const UPDATE_BOOK_QUANTITY_FAILURE = 'UPDATE_BOOK_QUANTITY_FAILURE'

// Add book actions
type AddBookRequestActionType = {
  type: typeof ADD_BOOK_REQUEST
}

type AddBookSuccessActionType = {
  type: typeof ADD_BOOK_SUCCESS
  bookId: string
  userId: string
}

type AddBookFailureActionType = {
  type: typeof ADD_BOOK_FAILURE
  error: string
}

// Remove book actions
type RemoveBookRequestActionType = {
  type: typeof REMOVE_BOOK_REQUEST
}

type RemoveBookSuccessActionType = {
  type: typeof REMOVE_BOOK_SUCCESS
  bookId: string
  userId: string
}

type RemoveBookFailureActionType = {
  type: typeof REMOVE_BOOK_FAILURE
  error: string
}

// Update book quantity actions
type UpdateBookQuantityRequestActionType = {
  type: typeof UPDATE_BOOK_QUANTITY_REQUEST
}

type UpdateBookQuantitySuccessActionType = {
  type: typeof UPDATE_BOOK_QUANTITY_SUCCESS
  bookId: string
  userId: string
  newQuantity: number
}

type UpdateBookQuantityFailureActionType = {
  type: typeof UPDATE_BOOK_QUANTITY_FAILURE
  error: string
}

export type ActionType =
  | AddBookRequestActionType
  | AddBookSuccessActionType
  | AddBookFailureActionType
  | RemoveBookRequestActionType
  | RemoveBookSuccessActionType
  | RemoveBookFailureActionType
  | UpdateBookQuantityRequestActionType
  | UpdateBookQuantitySuccessActionType
  | UpdateBookQuantityFailureActionType

export const addBook = (bookId: string) => async (dispatch: any, getState: () => any) => {
  dispatch({
    type: ADD_BOOK_REQUEST,
  })

  try {
    // delay the parsing to simulate an api request
    await delayOperation()

    // TODO analyze if this is more efficient than creating a selector
    // and getting the userId in the component
    const state = getState()
    const { signedInUser } = state.users

    dispatch({
      type: ADD_BOOK_SUCCESS,
      bookId,
      userId: signedInUser,
    })
  } catch (error: any) {
    dispatch({
      type: ADD_BOOK_FAILURE,
      error,
    })
  }
}

export const removeBook = (bookId: string) => async (dispatch: any, getState: () => any) => {
  dispatch({
    type: REMOVE_BOOK_REQUEST,
  })

  try {
    // delay the parsing to simulate an api request
    await delayOperation()

    const state = getState()
    const { signedInUser } = state.users

    dispatch({
      type: REMOVE_BOOK_SUCCESS,
      bookId,
      userId: signedInUser,
    })
  } catch (error: any) {
    dispatch({
      type: REMOVE_BOOK_FAILURE,
      error,
    })
  }
}

export const updateBookQuantity =
  (bookId: string, newQuantity: number) => async (dispatch: any, getState: () => any) => {
    dispatch({
      type: UPDATE_BOOK_QUANTITY_REQUEST,
    })

    try {
      // delay the parsing to simulate an api request
      await delayOperation()

      const state = getState()
      const { signedInUser } = state.users

      dispatch({
        type: UPDATE_BOOK_QUANTITY_SUCCESS,
        bookId,
        userId: signedInUser,
        newQuantity,
      })
    } catch (error: any) {
      dispatch({
        type: UPDATE_BOOK_QUANTITY_FAILURE,
        error,
      })
    }
  }
