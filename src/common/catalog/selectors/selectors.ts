// TODO remove any
export const getBookById =
  (bookId: any) =>
  (state: any): Book =>
    state.catalog.books.find((book: Book) => book.id === bookId)
