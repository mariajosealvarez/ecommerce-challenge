import { connect } from 'react-redux'
import { ComponentProps } from 'react'
import { SignUp as _SignUp } from './SignUp'
import { signUpUser } from '../../common/users/redux/actions'

type StatePropsType = Pick<ComponentProps<typeof _SignUp>, 'users'>

// TODO replace the ANY
const mapStateToProps = (state: any): StatePropsType => ({
  users: state.users,
})

type DispatchPropsType = Pick<ComponentProps<typeof _SignUp>, 'signUpUser'>
const mapDispatchToProps: DispatchPropsType = {
  signUpUser,
}

const SignUp = connect(mapStateToProps, mapDispatchToProps)(_SignUp)

export default SignUp
