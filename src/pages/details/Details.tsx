import { useParams, useSearchParams } from 'react-router-dom'

export const Details = () => {
  const { bookId } = useParams()

  return <div>{bookId}</div>
}
