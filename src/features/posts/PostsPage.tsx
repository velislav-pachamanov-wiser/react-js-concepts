import { Card } from '../../components/ui/Card'
import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from './postsApi'
import { PostCard } from './PostCard'

export default function PostsPage() {

  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="page posts-page">
      <Card title="Posts">
        <ul>
          {data?.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
      </Card>
    </div>
  )
}
