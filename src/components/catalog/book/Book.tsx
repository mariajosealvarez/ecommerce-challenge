import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import Backdrop from '@mui/material/Backdrop'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import CircularProgress from '@mui/material/CircularProgress'
import CssBaseline from '@mui/material/CssBaseline'
import IconButton from '@mui/material/IconButton'

import Price from '../../price'
import Authors from '../../authors'
import { useToastMessage } from '../../../hooks/useToastMessage'
import ToastMessage from '../../toast-message'

type Props = {
  book: Book
  isLoading: boolean
  addToCart: (book: Book) => void
}

export const Book: FC<Props> = ({ book, isLoading, addToCart }) => {
  const { isOpen, handleCloseSnackBar, message, displaySnackBar } = useToastMessage()

  const handleAddToCart = (book: Book) => {
    addToCart(book)
    displaySnackBar('Book added to the cart')
  }

  return (
    <>
      <CssBaseline />
      {isLoading ? (
        <Backdrop open sx={{ backgroundColor: 'transparent' }}>
          <CircularProgress color='primary' />
        </Backdrop>
      ) : (
        <Grid item xs={12} md={3}>
          <Card
            variant='outlined'
            sx={{ minHeight: 385, flexDirection: 'column', display: 'flex', justifyContent: 'space-between' }}
          >
            <CardActionArea component={RouterLink} to={`/books/${book.id}`}>
              <CardMedia sx={{ height: 200 }} image={book.imageLinks.thumbnail} title={book.title} />
              <CardContent>
                <Typography
                  variant='h6'
                  component='div'
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {book.title}
                </Typography>
                <Authors authors={book.authors} />
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: 'space-between' }}>
              {book.listPrice && <Price currency={book.listPrice.currencyCode} amount={book.listPrice.amount} />}
              <IconButton aria-label='Add to cart' onClick={() => handleAddToCart(book)}>
                <AddShoppingCartIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      )}
      <ToastMessage isOpen={isOpen} message={message} onClose={handleCloseSnackBar} />
    </>
  )
}
