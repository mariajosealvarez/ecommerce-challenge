import { connect } from 'react-redux'
import { Catalog as _Catalog } from './Catalog'
import { ComponentProps } from 'react'
import { fetchBooks } from './redux/actions'

type StatePropsType = Pick<ComponentProps<typeof _Catalog>, 'booksState'>

// TODO replace the ANY
const mapStateToProps = (state: any): StatePropsType => ({
  booksState: state.catalog,
})

type DispatchPropsType = Pick<ComponentProps<typeof _Catalog>, 'fetchBooks'>
const mapDispatchToProps: DispatchPropsType = {
  fetchBooks,
}

export const Catalog = connect(mapStateToProps, mapDispatchToProps)(_Catalog)
