import { ComponentProps } from 'react'
import { Details as _Details } from './Details'
import { addBook } from '../../state/cart/redux'
import { connect } from 'react-redux'

type DispatchPropsType = Pick<ComponentProps<typeof _Details>, 'addToCart'>
const mapDispatchToProps: DispatchPropsType = {
  addToCart: addBook,
}

const Details = connect(null, mapDispatchToProps)(_Details)

export default Details
