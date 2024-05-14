import { FC } from 'react'
import { useSelector } from 'react-redux'
import { userCartSelector } from '../../common/cart/selectors'
import styles from './Cart.module.css'
import QuantityControl from './quantity-control'
import { Alert } from '@mui/material'

type Props = {
  updateBookQuantity: (bookId: string, newQuantity: number) => void
  removeBook: (bookId: string) => void
}

export const Cart: FC<Props> = ({ updateBookQuantity, removeBook }) => {
  const userOrders: BookOrder[] = useSelector(userCartSelector)

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
    console.log(bookId, quantity)
    updateBookQuantity(bookId, quantity)
  }

  const handleRemoveBook = (bookId: string): void => {
    removeBook(bookId)
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
                <h3>{book.title}</h3>
                <button className={styles.controlButton} onClick={() => handleRemoveBook(book.id)}>
                  X
                </button>
              </header>
              {book.listPrice && (
                <p>
                  Price: {book.listPrice.currencyCode}
                  {book.listPrice.amount}
                </p>
              )}
              <QuantityControl
                quantity={quantity}
                onChange={(quantity) => handleUpdateBookQuantity(book.id, quantity)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.cartSummary}>
        <h5>ORDER SUMMARY: </h5>
        <p>ITEMS: {cartSummary.items}</p>
        <p>TOTAL {cartSummary.total.toFixed(2)}</p>
      </div>
    </div>
  )
}
