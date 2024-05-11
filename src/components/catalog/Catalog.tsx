import { FC, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BooksStateType } from './redux'

type Props = {
  booksState: BooksStateType
  fetchBooks: () => void
}

export const Catalog: FC<Props> = ({ booksState, fetchBooks }) => {
  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])

  console.log(booksState)

  return (
    <div>
      <section>
        <div>
          <p>book1</p>
          <Link to='/books/1'>Book1</Link>
        </div>
        -------
        <div>
          <p>book2</p>
          <Link to='/books/2'>Book2</Link>
        </div>
      </section>
    </div>
  )
}
