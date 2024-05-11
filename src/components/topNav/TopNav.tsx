import { Link } from 'react-router-dom'

export const TopNav = () => (
  <nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart</Link>
      </li>
    </ul>
  </nav>
)
