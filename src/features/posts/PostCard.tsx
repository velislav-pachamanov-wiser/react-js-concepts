import type { Post } from '../../types'

export type PostCardProps = {
  post: Post
}

/**
 * TODO: Link to `/posts/:postId`, excerpt, metadata (PROJECT_OUTLINE.md — Posts).
 */
export function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <h3>{post.title}</h3>
      <p>TODO: PostCard body / navigation</p>
    </article>
  )
}
