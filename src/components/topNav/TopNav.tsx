import { Link } from 'react-router-dom'

export const TopNav = () => (
  <nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/cart'>Cart</Link>
      </li>
    </ul>
  </nav>
)
