import { connect } from 'react-redux'
import { ComponentProps } from 'react'
import { SignUp as _SignUp } from './SignUp'
import { signUpUser } from '../../state/users/redux/actions'
import { RootState } from '../../store/store'

type StatePropsType = Pick<ComponentProps<typeof _SignUp>, 'users'>

const mapStateToProps = (state: RootState): StatePropsType => ({
  users: state.users,
})

type DispatchPropsType = Pick<ComponentProps<typeof _SignUp>, 'signUpUser'>
const mapDispatchToProps: DispatchPropsType = {
  signUpUser,
}

const SignUp = connect(mapStateToProps, mapDispatchToProps)(_SignUp)

export default SignUp
