import { Navigate, Outlet } from 'react-router-dom'
import TopNav from '../topNav'

export const ProtectedLayout = () => {
  const hasLogguedUser = true // TODO fetch from users store

  if (!hasLogguedUser) {
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
