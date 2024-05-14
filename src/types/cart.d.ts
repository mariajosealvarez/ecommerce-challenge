declare global {
  type BookOrder = {
    book: Pick<Book, 'id' | 'title' | 'imageLinks' | 'listPrice'>
    quantity: number
  }

  type Cart = Record<string, BookOrder[]>
}

export {}
