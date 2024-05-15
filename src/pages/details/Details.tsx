import { FC } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Alert, IconButton } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

import { getBookById } from '../../state/catalog/selectors'
import styles from './Details.module.css'
import Price from '../../components/price'
import Authors from '../../components/authors'
import { useToastMessage } from '../../hooks/useToastMessage'
import ToastMessage from '../../components/toast-message'

type Props = {
  addToCart: (book: Book) => void
}

type BookParams = {
  bookId: string
}

export const Details: FC<Props> = ({ addToCart }) => {
  const { bookId } = useParams<BookParams>()
  const book = useSelector(getBookById(bookId))
  const { isOpen, handleCloseSnackBar, message, displaySnackBar } = useToastMessage()

  const handleAddToCart = (book: Book) => {
    addToCart(book)
    displaySnackBar('Book added to the cart')
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
          <p className={styles.title}>{book.title}</p>
          <Authors authors={book.authors} />
          <p className={styles.description}>{book.description}</p>
          {book.categories && (
            <p className={styles.description}>
              <strong>Categories: </strong>
              {book.categories?.join(', ')}
            </p>
          )}
          {book.pageCount && (
            <p className={styles.description}>
              <strong>Page count: </strong>
              {book.pageCount} pages
            </p>
          )}
          {book.reviews && (
            <div className={styles.description}>
              <p>Reviews:</p>
              {book.reviews.map((review, index) => (
                // I'm using the index just because we are listing the reviews,
                // in case we have the option to edit, remove, etc, we shpuld't use the index value
                <blockquote key={index}>{review}</blockquote>
              ))}
            </div>
          )}
          <div className={styles.detailFooter}>
            {book.listPrice && <Price currency={book.listPrice.currencyCode} amount={book.listPrice.amount} />}
            <IconButton aria-label='Add to cart' onClick={() => handleAddToCart(book)}>
              <AddShoppingCartIcon />
            </IconButton>
          </div>
        </aside>
      </div>
      <ToastMessage isOpen={isOpen} message={message} onClose={handleCloseSnackBar} />
    </section>
  )
}
