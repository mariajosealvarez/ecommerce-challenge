import { FC } from 'react'
import { useSelector } from 'react-redux'
import { userCartSelector } from '../../state/cart/selectors'
import styles from './Cart.module.css'
import QuantityControl from './quantity-control'
import { Alert } from '@mui/material'
import Price from '../../components/price'
import ToastMessage from '../../components/toast-message'
import { useToastMessage } from '../../hooks/useToastMessage'

type Props = {
  updateBookQuantity: (bookId: string, newQuantity: number) => void
  removeBook: (bookId: string) => void
}

export const Cart: FC<Props> = ({ updateBookQuantity, removeBook }) => {
  const userOrders: BookOrder[] = useSelector(userCartSelector)
  const { isOpen, handleCloseSnackBar, message, displaySnackBar } = useToastMessage()

  const cartSummary = userOrders.reduce(
    (summary, { book, quantity }) => {
      const bookTotal = quantity * (book.listPrice?.amount || 0)
      return {
        total: summary.total + bookTotal,
        items: summary.items + quantity,
      }
    },
    {
      total: 0,
      items: 0,
    }
  )

  const handleUpdateBookQuantity = (bookId: string, quantity: number): void => {
    updateBookQuantity(bookId, quantity)
    displaySnackBar('Book quantity updated')
  }

  const handleRemoveBook = (bookId: string): void => {
    removeBook(bookId)
    displaySnackBar('Book removed')
  }

  if (!userOrders.length) {
    return <Alert severity='warning'>The cart is empty</Alert>
  }

  return (
    <div className={styles.cart}>
      <div className={styles.orders}>
        {userOrders.map(({ book, quantity }) => (
          <div key={book.id} className={styles.order}>
            <div>
              <img src={book.imageLinks.smallThumbnail} alt={book.title} />
            </div>
            <div className={styles.details}>
              <header className={styles.header}>
                <p className={styles.title}>{book.title}</p>
                <button className={styles.closeButton} onClick={() => handleRemoveBook(book.id)}>
                  X
                </button>
              </header>
              {book.listPrice && <Price currency={book.listPrice.currencyCode} amount={book.listPrice.amount} />}
              <QuantityControl
                quantity={quantity}
                onChange={(quantity) => handleUpdateBookQuantity(book.id, quantity)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cartSummary}>
        <p className={styles.title}>
          Order Summary: {cartSummary.items} {cartSummary.items > 1 ? 'items' : 'item'}, Total:{' '}
          {cartSummary.total.toFixed(2)}
        </p>
      </div>
      <ToastMessage isOpen={isOpen} message={message} onClose={handleCloseSnackBar} />
    </div>
  )
}
