import { ActionType, FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from './actions'

export type BooksStateType = {
  isLoading: boolean
  books: Book[]
  error: string
}

const initialState: BooksStateType = {
  isLoading: false,
  books: [],
  error: '',
}

// TODO remove ANY
export const booksReducer = (state: BooksStateType = initialState, action: ActionType | any): BooksStateType => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        books: action.books,
      }
    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    default:
      return state
  }
}
