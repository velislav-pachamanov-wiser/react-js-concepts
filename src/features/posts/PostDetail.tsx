import { Card } from '../../components/ui/Card'
import { fetchPostById } from './postsApi'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

/**
 * TODO: useParams + TanStack Query for single post; loading/error states (PROJECT_OUTLINE.md).
 */
export default function PostDetail() {
  const { postId } = useParams()
  const { data, isLoading, error } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => fetchPostById(postId),
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="page post-detail">
      <Link to="/posts">Back to posts</Link>
      <Card title="Post detail">
        <h3>{data?.title}</h3>
        <p>{data?.body}</p>
      </Card>
    </div>
  )
}
