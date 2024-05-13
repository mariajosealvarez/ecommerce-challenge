import { connect } from 'react-redux'
import { ComponentProps } from 'react'
import { TopNav as _TopNav } from './TopNav'
import { logout } from '../../common/users/redux/actions'

type DispatchPropsType = Pick<ComponentProps<typeof _TopNav>, 'logout'>
const mapDispatchToProps: DispatchPropsType = {
  logout,
}

const TopNav = connect(null, mapDispatchToProps)(_TopNav)

export default TopNav
