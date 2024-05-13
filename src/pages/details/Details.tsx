import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBookById } from '../../common/catalog/selectors/selectors'
import { Alert, Button, IconButton, Typography } from '@mui/material'
import styles from './Details.module.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { Link as RouterLink } from 'react-router-dom'

export const Details = () => {
  const { bookId } = useParams()
  const book = useSelector(getBookById(bookId))

  console.log(book)

  const handleAddToCart = (bookId: string) => {
    console.log('add to cart', bookId)
    // navigate(`/cart`)
  }

  if (!book) {
    return <Alert severity='warning'>Book not found</Alert>
  }

  return (
    <section>
      <div className={styles.detailsContainer}>
        <div className={styles.detailImage}>
          <img src={book.imageLinks.thumbnail} alt={book.title} />
        </div>
        <aside className={styles.detailContent}>
          <h1 className={styles.title}>{book.title}</h1>
          <h2 className={styles.authors}>{book.authors ? `Authors: ${book.authors.join(', ')}` : '---'}</h2>
          <p className={styles.description}>{book.description}</p>
          <p>Page count {book.pageCount}</p>
          <div className={styles.detailFooter}>
            {book.listPrice && (
              <Typography>
                {book.listPrice.currencyCode} {book.listPrice.amount}
              </Typography>
            )}
            <IconButton aria-label='Add to cart' onClick={() => handleAddToCart(book.id)}>
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        </aside>
      </div>
      <Button component={RouterLink} to='/'>
        Back to book catalog
      </Button>
    </section>
  )
}
