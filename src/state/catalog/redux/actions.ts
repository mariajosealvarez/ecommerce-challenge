import booksData from '../../../mockedData/books.json'
import { delayOperation } from '../../../utils/delayOperation'

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST'
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS'
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE'

type FetchBooksRequestActionType = {
  type: typeof FETCH_BOOKS_REQUEST
}

type FetchBooksSuccessActionType = {
  type: typeof FETCH_BOOKS_SUCCESS
  books: Book[]
}

type FetchBooksFailureActionType = {
  type: typeof FETCH_BOOKS_FAILURE
  error: string
}

export type ActionType = FetchBooksRequestActionType | FetchBooksSuccessActionType | FetchBooksFailureActionType

export const fetchBooks = () => async (dispatch: any) => {
  dispatch({
    type: FETCH_BOOKS_REQUEST,
  })

  try {
    // delay the parsing to simulate an api request
    await delayOperation()

    const response = JSON.parse(JSON.stringify(booksData))
    const books: Book[] = response.books

    dispatch({
      type: FETCH_BOOKS_SUCCESS,
      books,
    })
  } catch (error) {
    dispatch({
      type: FETCH_BOOKS_FAILURE,
      error,
    })
  }
}
