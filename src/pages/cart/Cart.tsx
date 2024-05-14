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

  // mostrarimagen, titulo, botones para cambiar cantidad, link al detalle
  const cartSummary = userOrders.reduce(
    (summary, order) => {
      const bookTotal = order.quantity * (order.book.listPrice?.amount || 0)
      return {
        total: summary.total + bookTotal,
        items: summary.items + order.quantity,
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
        {userOrders.map((order) => (
          <div key={order.book.id} className={styles.order}>
            <div>
              <img src={order.book.imageLinks.smallThumbnail} alt={order.book.title} />
            </div>
            <div className={styles.details}>
              <h3>{order.book.title}</h3>
              <QuantityControl
                quantity={order.quantity}
                onChange={(quantity) => handleUpdateBookQuantity(order.book.id, quantity)}
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
