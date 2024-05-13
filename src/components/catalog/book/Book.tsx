import { FC } from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { CardActionArea, CardActions, IconButton, Skeleton } from '@mui/material'

type Props = {
  book: Book
  isLoading: boolean
}

export const Book: FC<Props> = ({ book, isLoading }: Props) => {
  // const navigate = useNavigate()

  const handleAddToCart = (bookId: string) => {
    console.log('add to cart', bookId)
    // navigate(`/cart`)
  }

  return (
    <>
      {isLoading ? (
        <Skeleton animation='wave' height={200} width='25%' />
      ) : (
        <Grid item xs={12} md={3}>
          <Card sx={{ minHeight: 385 }}>
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
                <Typography
                  color='text.secondary'
                  sx={{
                    mb: 1.5,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '1',
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {book.authors ? book.authors.join(', ') : '---'}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {book.listPrice && (
                <Typography>
                  {book.listPrice.currencyCode} {book.listPrice.amount}
                </Typography>
              )}
              <IconButton aria-label='Add to cart' onClick={() => handleAddToCart(book.id)}>
                <AddShoppingCartIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      )}
    </>
  )
}
