import { FC, useEffect } from 'react'
import { Alert, Box, Container, CssBaseline, Grid } from '@mui/material'

import { BooksStateType } from './redux'
import Book from './book'

type Props = {
  booksState: BooksStateType
  fetchBooks: () => void
}

export const Catalog: FC<Props> = ({ booksState, fetchBooks }) => {
  const { isLoading, books, error } = booksState
  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])

  if (error) {
    return <Alert severity='error'>Error trying to get the books, please try again</Alert>
  }

  return (
    <Container>
      <CssBaseline />
      <Box>
        <Grid container spacing={4}>
          {books.map((book) => (
            <Book key={book.id} book={book} isLoading={isLoading} />
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
