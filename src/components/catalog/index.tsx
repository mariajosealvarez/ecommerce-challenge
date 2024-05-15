import { ComponentProps } from 'react'
import { connect } from 'react-redux'
import { Catalog as _Catalog } from './Catalog'
import { fetchBooks } from '../../state/catalog/redux/actions'
import { RootState } from '../../store/store'

type StatePropsType = Pick<ComponentProps<typeof _Catalog>, 'booksState'>

const mapStateToProps = (state: RootState): StatePropsType => ({
  booksState: state.catalog,
})

type DispatchPropsType = Pick<ComponentProps<typeof _Catalog>, 'fetchBooks'>
const mapDispatchToProps: DispatchPropsType = {
  fetchBooks,
}

export const Catalog = connect(mapStateToProps, mapDispatchToProps)(_Catalog)
