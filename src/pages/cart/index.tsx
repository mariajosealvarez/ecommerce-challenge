import { connect } from 'react-redux'
import { ComponentProps } from 'react'
import { Cart as _Cart } from './Cart'
import { removeBook, updateBookQuantity } from '../../state/cart/redux'

type DispatchPropsType = Pick<ComponentProps<typeof _Cart>, 'updateBookQuantity' | 'removeBook'>
const mapDispatchToProps: DispatchPropsType = {
  updateBookQuantity,
  removeBook,
}

const Cart = connect(null, mapDispatchToProps)(_Cart)

export default Cart
