import { Link } from 'react-router-dom'

export const Error = () => (
  <div>
    <h1>PAGE NOT FOUND</h1>
    <button>
      <Link to='/'>Back to home</Link>
    </button>
  </div>
)
