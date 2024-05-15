import { FC, useEffect, useState } from 'react'
import { Alert, Box, Container, CssBaseline, Grid, InputBase, Toolbar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { BooksStateType } from '../../state/catalog/redux'
import Book from './book'

type Props = {
  booksState: BooksStateType
  fetchBooks: () => void
}

export const Catalog: FC<Props> = ({ booksState, fetchBooks }) => {
  const { isLoading, books, error } = booksState
  const [searchParam, setSearchParam] = useState<string>('')

  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchParam(event.target.value)
  }

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchParam.toLowerCase()) || // match title
      book.authors?.find((author) => author.toLowerCase().includes(searchParam)) // or any author
  )

  if (error) {
    return <Alert severity='error'>Error trying to get the books, please try again</Alert>
  }

  return (
    <Container>
      <CssBaseline />
      <Box>
        <Toolbar sx={{ backgroundColor: 'lightblue', color: '#000', marginBottom: 1 }}>
          <SearchIcon />
          <InputBase placeholder='Search title or author' onChange={handleSearchChange} />
        </Toolbar>
        <Grid container spacing={4}>
          {filteredBooks.map((book) => (
            <Book key={book.id} book={book} isLoading={isLoading} />
          ))}
        </Grid>
      </Box>
    </Container>
  )
}
