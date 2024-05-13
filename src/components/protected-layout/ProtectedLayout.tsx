import { Navigate, Outlet } from 'react-router-dom'
import TopNav from '../topNav'
import { useSelector } from 'react-redux'
import { isUserSignedIn } from '../../common/users/selectors/selectors'

export const ProtectedLayout = () => {
  const hasLoguedUser = useSelector(isUserSignedIn)

  if (!hasLoguedUser) {
    return <Navigate to='/signin'></Navigate>
  }

  return (
    <div>
      <header>
        <TopNav />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
