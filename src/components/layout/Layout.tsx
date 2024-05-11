import { Outlet } from 'react-router-dom'
import TopNav from '../topNav'

export const Layout = () => (
  <div>
    <header>
      <TopNav />
    </header>
    <main>
      <Outlet />
    </main>
  </div>
)
