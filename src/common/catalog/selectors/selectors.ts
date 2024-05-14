import { RootState } from '../../../store/store'

export const getBookById =
  // TODO remove this any

    (bookId: any) =>
    (state: RootState): Book | undefined =>
      state.catalog.books.find((book: Book) => book.id === bookId)
