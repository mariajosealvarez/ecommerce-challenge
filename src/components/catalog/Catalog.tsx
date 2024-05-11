import { Link } from 'react-router-dom'

export const Catalog = () => {
  return (
    <div>
      <section>
        <div>
          <p>book1</p>
          <Link to='/books/1'>Book1</Link>
        </div>
        -------
        <div>
          <p>book2</p>
          <Link to='/books/2'>Book2</Link>
        </div>
      </section>
    </div>
  )
}
