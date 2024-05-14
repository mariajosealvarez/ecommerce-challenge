import { connect } from 'react-redux'
import { ComponentProps } from 'react'
import { Book as _Book } from './Book'
import { addBook } from '../../../common/cart/redux'

type DispatchPropsType = Pick<ComponentProps<typeof _Book>, 'addToCart'>
const mapDispatchToProps: DispatchPropsType = {
  addToCart: addBook,
}

const Book = connect(null, mapDispatchToProps)(_Book)

export default Book
