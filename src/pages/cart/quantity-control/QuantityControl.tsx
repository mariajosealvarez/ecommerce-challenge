import { FC } from 'react'
import styles from './QuantityControl.module.css'

type Props = {
  quantity: number
  onChange: (quantity: number) => void
}

export const QuantityControl: FC<Props> = ({ quantity, onChange }) => {
  return (
    <div className={styles.control}>
      <button className={styles.controlButton} onClick={() => onChange(-1)} disabled={quantity === 0}>
        -
      </button>
      <p className={styles.quantity}>{quantity}</p>
      <button className={styles.controlButton} onClick={() => onChange(1)}>
        +
      </button>
    </div>
  )
}
