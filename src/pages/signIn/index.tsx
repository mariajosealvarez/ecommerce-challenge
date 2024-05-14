import { connect } from 'react-redux'
import { ComponentProps } from 'react'
import { SignIn as _SignIn } from './SignIn'
import { signInUser } from '../../common/users/redux/actions'
import { RootState } from '../../store/store'

type StatePropsType = Pick<ComponentProps<typeof _SignIn>, 'users'>

const mapStateToProps = (state: RootState): StatePropsType => ({
  users: state.users,
})

type DispatchPropsType = Pick<ComponentProps<typeof _SignIn>, 'signInUser'>
const mapDispatchToProps: DispatchPropsType = {
  signInUser,
}

const SignIn = connect(mapStateToProps, mapDispatchToProps)(_SignIn)

export default SignIn
